import { createContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function ContextProvider({children}){
    // postdate
    // const navigate = useNavigate();
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();
  
    // posts states
    const skills = useRef();
    const [arrskills, setarrskills] = useState([]);
    const [posts, setposts] = useState(()=>{
        const saved = localStorage.getItem('posts');
        return saved ? JSON.parse(saved) : [];
    });
    const [jobtitle, setjobtitle] = useState('');
    const [companyname, setcompanyname] = useState('');
    const [location, setlocation] = useState('');
    const [jobtype, setjobtype] = useState('');
    const [description, setdescription] = useState('');
    const [minsalary, setminsalary] = useState('');
    const [maxsalary, setmaxsalary] = useState('');
    const [additional, setadditional] = useState([]);
    const [itemIndex, setitemIndex] = useState();

    useEffect(()=>{
        localStorage.setItem('posts',JSON.stringify(posts));
    },[posts]);

    // editposts states
    const editskills = useRef();
    const [editarrskills, seteditarrskills] = useState([]);
    const [editposts, seteditposts] = useState([]);
    const [editjobtitle, seteditjobtitle] = useState('');
    const [editcompanyname, seteditcompanyname] = useState('');
    const [editlocation, seteditlocation] = useState('');
    const [editjobtype, seteditjobtype] = useState('');
    const [editdescription, seteditdescription] = useState('');
    const [editminsalary, seteditminsalary] = useState('');
    const [editmaxsalary, seteditmaxsalary] = useState('');
    const [editadditional, seteditadditional] = useState([]);
    
    
    // title handler 
    const titlehandler = (event)=> setjobtitle(event.target.value);
    const companynamehandler = (event)=> setcompanyname(event.target.value);
    const locationhandler = (event)=> setlocation(event.target.value);
    const jobtypehandler = (event)=> setjobtype(event.target.value);
    const descriptionhandler = (event)=> setdescription(event.target.value);
    const minsalaryhandler = (event)=> setminsalary(event.target.value);
    const maxsalaryhandler = (event)=> setmaxsalary(event.target.value);


    const edittitlehandler = (event)=> seteditjobtitle(event.target.value);
    const editcompanynamehandler = (event)=> seteditcompanyname(event.target.value);
    const editlocationhandler = (event)=> seteditlocation(event.target.value);
    const editjobtypehandler = (event)=> seteditjobtype(event.target.value);
    const editdescriptionhandler = (event)=> seteditdescription(event.target.value);
    const editminsalaryhandler = (event)=> seteditminsalary(event.target.value);
    const editmaxsalaryhandler = (event)=> seteditmaxsalary(event.target.value);
   
    // set skills keyword
    const getskilllhandler = (event) =>{
        if(event.key === ' '){
            event.preventDefault();
            return;
        } 
        if(event.key === 'Enter'){
            setarrskills([...arrskills, skills.current.value]);
            skills.current.value = '';
        }
    }

    // set editskills keyword
    const geteditskilllhandler = (event) =>{
       if(event.key === ' '){
            event.preventDefault();
            return;
        } 
        if(event.key === 'Enter'){
            seteditarrskills([...editarrskills, editskills.current.value]);
            editskills.current.value = '';
        }
    }

    // additonal info | First-time | Health Insurance
    const additionalhandler = (event)=>{
        if(event.target.checked){
            setadditional([...additional, event.target.value]);
        }else{
            const removeItem = additional.filter(item=> item != event.target.value);
            setadditional(removeItem);
        }
    }
    
    // edit additonal info | First-time | Health Insurance
    const editadditionalhandler = (event)=>{
        if(event.target.checked){
            seteditadditional([...editadditional, event.target.value]);
        }else{
            const editremoveItem = editadditional.filter(item=> item != event.target.value);
            seteditadditional(editremoveItem);
        }
    }

    // remove required skill
    const deleteskillhandler = (index)=>{
        const deleteskill = arrskills.filter((item, i)=> i != index);
        setarrskills(deleteskill);
    }
    // remove edit required skill
    const deleteeditskillhandler = (index)=>{
        const deleteeditskill = editarrskills.filter((item, i)=> i != index);
        seteditarrskills(deleteeditskill);
    }

    // sidebar
    const [show, setHide] = useState(false);
    const showSidebar = () => {
        setHide(true);
        document.querySelector('body').style.overflow = 'hidden';
    };
    const hideSidebar = () => {
        setHide(false)
        document.querySelector('body').style.overflowX = 'hidden';
        document.querySelector('body').style.overflowY = 'auto';
    };

    const publishpostHandler = ()=>{
        setposts([
            ...posts,{
                title:jobtitle,
                company:companyname,
                location:location,
                jobType:jobtype,
                description:description,
                requiredskill:arrskills,
                minsalar:minsalary,
                maxsalary:maxsalary,
                benefits:additional,
                postDate:day+"/"+month+"/"+year
            }
        ]);
    }

    const deletepost = (index)=>{
        const deletedPost = posts.filter((item, i)=> i != index);
        setposts(deletedPost);
    }


    // edit post
    const editposthandler = (index)=>{
        setitemIndex(index);
        const editItem = posts[index];

        seteditjobtitle(editItem.title);
        seteditcompanyname(editItem.company);
        seteditlocation(editItem.location);
        seteditjobtype(editItem.jobType);
        seteditdescription(editItem.description);
        seteditminsalary(editItem.minsalar);
        seteditmaxsalary(editItem.maxsalary);
        seteditarrskills(editItem.requiredskill);
        seteditadditional(editItem.benefits);
    }

    const editpost = ()=>{
        const updatedPost = [...posts];
        updatedPost[itemIndex] ={
            ...updatedPost[itemIndex],
            title:editjobtitle,
            company:editcompanyname,
            location:editlocation,
            jobType:editjobtype,
            description:editdescription,
            requiredskill:editarrskills,
            minsalary: editminsalary,
            maxsalary: editmaxsalary,
            benefits:editadditional
        } 
        
        setposts(updatedPost);
    }
  

    return (
        <AppContext.Provider value={{
            show,
            posts,
            skills,
            jobtitle,
            arrskills,
            companyname,
            location,
            jobtype,
            description,
            minsalary,
            maxsalary,
            editarrskills,
            editposts,
            editjobtitle,
            editcompanyname,
            editlocation,
            editjobtype,
            editdescription,
            editadditional,
            editminsalary,
            editmaxsalary,
            editarrskills,
            editskills,
            geteditskilllhandler,
            companynamehandler,
            locationhandler,
            jobtypehandler,
            descriptionhandler,
            minsalaryhandler,
            maxsalaryhandler,
            editadditionalhandler,
            deletepost,
            showSidebar,
            hideSidebar,
            titlehandler,
            editposthandler,
            getskilllhandler,
            additionalhandler,
            deleteskillhandler,
            publishpostHandler,
            edittitlehandler,
            editcompanynamehandler,
            editlocationhandler,
            editjobtypehandler,
            editdescriptionhandler,
            editminsalaryhandler,
            editmaxsalaryhandler,
            deleteeditskillhandler,
            editpost
        }}>
            {children}
        </AppContext.Provider>
    )
}