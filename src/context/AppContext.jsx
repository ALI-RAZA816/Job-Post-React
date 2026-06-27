import { createContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function ContextProvider({children}){
    // postdate
    // const navigate = useNavigate();
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const day = date.getDate();

    // error states 
    const [titleErr, settitleErr] = useState();
    const [companyErr, setcompanyErr] = useState();
    const [locationErr, setlocationErr] = useState();
    const [jobtypeErr, setjobtypeErr] = useState();
    const [descriptionErr, setdescriptionErr] = useState();
    const [skillsErr, setskillsErr] = useState();
    const [minsalaryErr, setminErr] = useState();
    const [maxsalaryErr, setmaxsalaryErr] = useState();
    const [benefitsErr, setbenefitsErr] = useState();
  
    // posts states
    const skills = useRef();
    const [arrskills, setarrskills] = useState([]);
    const[isPosted, setPosted] = useState(false);
    const [posts, setposts] = useState(()=>{
        const saved = localStorage.getItem('posts');
        return saved ? JSON.parse(saved) : [];
    });
    const [savejob, setsavejob] = useState(()=>{
        const savejob = localStorage.getItem('savejobs');
        return savejob ? JSON.parse(savejob) : []});
    const [jobtitle, setjobtitle] = useState('');
    const [companyname, setcompanyname] = useState('');
    const [location, setlocation] = useState('');
    const [jobtype, setjobtype] = useState('');
    const [description, setdescription] = useState('');
    const [minsalary, setminsalary] = useState('');
    const [maxsalary, setmaxsalary] = useState('');
    const [additional, setadditional] = useState([]);
    const [itemIndex, setitemIndex] = useState();

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

    useEffect(()=>{
        
        localStorage.setItem('posts',JSON.stringify(posts));
        localStorage.setItem('savejobs',JSON.stringify(savejob));
        const interval = setTimeout(()=>{
            settitleErr(false);
            setcompanyErr(false);
            setlocationErr(false);
            setjobtypeErr(false);
            setdescriptionErr(false);
            setskillsErr(false);
            setminErr(false);
            setmaxsalaryErr(false);
            setbenefitsErr(false);
        },2000);
        
        return ()=> clearTimeout(interval);
    },[posts, savejob]);

    
    
    // title handler 
    const titlehandler = (event)=> setjobtitle(event.target.value);
    const companynamehandler = (event)=> setcompanyname(event.target.value);
    const locationhandler = (event)=> setlocation(event.target.value);
    const jobtypehandler = (event)=> setjobtype(event.target.value);
    const descriptionhandler = (event)=> setdescription(event.target.value);
    const minsalaryhandler = (event)=> setminsalary(event.target.value);
    const maxsalaryhandler = (event)=> setmaxsalary(event.target.value);

    // edit post handlers
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
            setarrskills([...arrskills, skills.current.value.toLowerCase()]);
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
            seteditarrskills([...editarrskills, editskills.current.value.toLowerCase()]);
            editskills.current.value = '';
        }
    }

    // additonal info | First-time | Health Insurance
    const additionalhandler = (event)=>{
        if(event.target.checked){
            setadditional([...additional, event.target.value.toLowerCase()]);
        }else{
            const removeItem = additional.filter(item=> item != event.target.value.toLowerCase());
            setadditional(removeItem);
        }
    }
    
    // edit additonal info | First-time | Health Insurance
    const editadditionalhandler = (event)=>{
        if(event.target.checked){
            seteditadditional([...editadditional, event.target.value.toLowerCase()]);
        }else{
            const editremoveItem = editadditional.filter(item=> item != event.target.value.toLowerCase());
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

    // hidemenu bar
    const hideSidebar = () => {
        setHide(false)
        document.querySelector('body').style.overflowX = 'hidden';
        document.querySelector('body').style.overflowY = 'auto';
    };


    // post job hander
    const publishpostHandler = ()=>{
        if(!jobtitle){
            settitleErr(true);
            return;
        }
        if(!companyname){
            setcompanyErr(true);
            return;
        }
        if(!location){
            setlocationErr(true);
            return;
        }
        if(!jobtype){
            setjobtypeErr(true);
            return;
        }
        if(!description){
            setdescriptionErr(true);
            return;
        }
        if(arrskills.length === 0){
            setskillsErr(true);
            return;
        }
        if(!minsalary){
            setminErr(true);
            return;
        }
        if(!maxsalary){
            setmaxsalaryErr(true);
            return;
        }
        if(additional.length === 0){
            setbenefitsErr(true);
            return;
        }
        setposts([
            ...posts,{
                id: Date.now(),
                title:jobtitle,
                company:companyname,
                location:location.toLowerCase(),
                jobType:jobtype.toLowerCase(),
                description:description,
                requiredskill:arrskills,
                minsalar:minsalary,
                maxsalary:maxsalary,
                benefits:additional,
                postDate:day+"/"+month+"/"+year
            }
        ]);
        skills.current.value = '';
        setjobtitle('');
        setcompanyname('');
        setlocation('');
        setjobtype('');
        setdescription('');
        setminsalary('');
        setmaxsalary('');
        setTimeout(()=>{
            setPosted(true);
            document.querySelector('body').style.overflow = 'hidden';
        },2000);
    }


    // hide modalbox
    const hidemodalbox = ()=>{
        setPosted(false);
        document.querySelector('body').style.overflowX = 'hidden';
        document.querySelector('body').style.overflowY = 'auto';
    }

    // delete post handler
    const deletepost = (index)=>{
        const deletedpost = posts[index];
        const deletedPost = posts.filter((item, i)=> i != index);
        if (deletedpost) {
            setsavejob(prev => prev.filter(id => id !== deletedPost.id));
        }
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

    // edit post handler
    const editpost = ()=>{
        const updatedPost = [...posts];
        updatedPost[itemIndex] ={
            ...updatedPost[itemIndex],
            id: Date.now(),
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

    // saved job handler
    const savejobhandler = (id)=>{
        if(savejob.includes(id)){
            alert('already saved');
            return;
        }
        setsavejob([...savejob, id]);
    }

    // unsaved job handler
    const deletesavejobhandler = (id)=>{
        const deleted = savejob.filter(item => item != id);
        setsavejob(deleted);
    }

    // render savedjob 
    const savedjobs = posts.filter(post=> savejob.includes(post.id));

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
            savedjobs,
            editlocation,
            editjobtype,
            editdescription,
            editadditional,
            editminsalary,
            editmaxsalary,
            editarrskills,
            savejob,
            titleErr,
            companyErr,
            locationErr,
            jobtypeErr,
            descriptionErr,
            skillsErr,
            isPosted,
            minsalaryErr,
            maxsalaryErr,
            benefitsErr,
            editskills,
            geteditskilllhandler,
            companynamehandler,
            locationhandler,
            jobtypehandler,
            descriptionhandler,
            minsalaryhandler,
            hidemodalbox,
            maxsalaryhandler,
            deletesavejobhandler,
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
            editpost,
            savejobhandler
        }}>
            {children}
        </AppContext.Provider>
    )
}