import { createContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create a context object that will be used to share state across components
export const AppContext = createContext();

export default function ContextProvider({ children}) {
  // ----- Date utilities for post date -----
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const day = date.getDate();


  const [modalMsg, setmodalMsg] = useState('post');
  const [isPosted, setPosted] = useState(false); // flag to show success modal


  // ----- Error state booleans for form validation -----
  const [titleErr, settitleErr] = useState();
  const [companyErr, setcompanyErr] = useState();
  const [locationErr, setlocationErr] = useState();
  const [jobtypeErr, setjobtypeErr] = useState();
  const [descriptionErr, setdescriptionErr] = useState();
  const [skillsErr, setskillsErr] = useState();
  const [minsalaryErr, setminErr] = useState();
  const [maxsalaryErr, setmaxsalaryErr] = useState();
  const [benefitsErr, setbenefitsErr] = useState();
  const [draftindex, setdraftindex] = useState(); // index of draft being published

  // ----- Refs and state for post creation -----
  const skills = useRef(); // reference to the skills input
  const [arrskills, setarrskills] = useState([]); // array of skill tags
  const [drafts, setdrafts] = useState(() => {
    // Load draft posts from localStorage, or fallback to empty array
    const draftpost = localStorage.getItem("draftspost");
    return draftpost ? JSON.parse(draftpost) : [];
  });
  const [posts, setposts] = useState(() => {
    // Load published posts from localStorage
    const saved = localStorage.getItem("posts");
    return saved ? JSON.parse(saved) : [];
  });
  const [savejob, setsavejob] = useState(() => {
    // Load saved job IDs from localStorage
    const savejobs = localStorage.getItem("savejobs");
    return savejobs ? JSON.parse(savejobs) : [];
  });

  // Form field states for new job post
  const [jobtitle, setjobtitle] = useState("");
  const [companyname, setcompanyname] = useState("");
  const [location, setlocation] = useState("");
  const [jobtype, setjobtype] = useState("");
  const [description, setdescription] = useState("");
  const [minsalary, setminsalary] = useState("");
  const [maxsalary, setmaxsalary] = useState("");
  const [additional, setadditional] = useState([]); // selected benefits
  const [itemIndex, setitemIndex] = useState(); // index of post being edited

  // ----- States for editing an existing post -----
  const editskills = useRef();
  const [editarrskills, seteditarrskills] = useState([]);
  const [editposts, seteditposts] = useState([]);
  const [editjobtitle, seteditjobtitle] = useState("");
  const [editcompanyname, seteditcompanyname] = useState("");
  const [editlocation, seteditlocation] = useState("");
  const [editjobtype, seteditjobtype] = useState("");
  const [editdescription, seteditdescription] = useState("");
  const [editminsalary, seteditminsalary] = useState("");
  const [editmaxsalary, seteditmaxsalary] = useState("");
  const [editadditional, seteditadditional] = useState([]);

  // ----- Sidebar visibility state -----
  const [show, setHide] = useState(false);

  // ----- Effects: persist data to localStorage and clear errors after delay -----
  useEffect(() => {
    // Save posts, saved jobs, and drafts to localStorage whenever they change
    localStorage.setItem("posts", JSON.stringify(posts));
    localStorage.setItem("savejobs", JSON.stringify(savejob));
    localStorage.setItem("draftspost", JSON.stringify(drafts));

    // Clear error messages after 2 seconds
    const interval = setTimeout(() => {
      settitleErr(false);
      setcompanyErr(false);
      setlocationErr(false);
      setjobtypeErr(false);
      setdescriptionErr(false);
      setskillsErr(false);
      setminErr(false);
      setmaxsalaryErr(false);
      setbenefitsErr(false);
    }, 2000);

    return () => clearTimeout(interval);
  }, [posts, savejob, drafts]);

  // ----- Input change handlers for the main form -----
  const titlehandler = (event) => setjobtitle(event.target.value);
  const companynamehandler = (event) => setcompanyname(event.target.value);
  const locationhandler = (event) => setlocation(event.target.value);
  const jobtypehandler = (event) => setjobtype(event.target.value);
  const descriptionhandler = (event) => setdescription(event.target.value);
  const minsalaryhandler = (event) => setminsalary(event.target.value);
  const maxsalaryhandler = (event) => setmaxsalary(event.target.value);

  // ----- Input change handlers for the edit form -----
  const edittitlehandler = (event) => seteditjobtitle(event.target.value);
  const editcompanynamehandler = (event) =>
    seteditcompanyname(event.target.value);
  const editlocationhandler = (event) => seteditlocation(event.target.value);
  const editjobtypehandler = (event) => seteditjobtype(event.target.value);
  const editdescriptionhandler = (event) =>
    seteditdescription(event.target.value);
  const editminsalaryhandler = (event) => seteditminsalary(event.target.value);
  const editmaxsalaryhandler = (event) => seteditmaxsalary(event.target.value);

  // ----- Skill tag management (main form) -----
  const getskilllhandler = (event) => {
    // Prevent spaces from being entered as a tag
    if (event.key === " ") {
      event.preventDefault();
      return;
    }
    // On Enter, add the skill to the array and clear the input
    if (event.key === "Enter") {
      setarrskills([...arrskills, skills.current.value.toLowerCase()]);
      skills.current.value = "";
    }
  };

  // ----- Skill tag management (edit form) -----
  const geteditskilllhandler = (event) => {
    if (event.key === " ") {
      event.preventDefault();
      return;
    }
    if (event.key === "Enter") {
      seteditarrskills([
        ...editarrskills,
        editskills.current.value.toLowerCase(),
      ]);
      editskills.current.value = "";
    }
  };

  // ----- Additional benefits handling (main) -----
  const additionalhandler = (event) => {
    if (event.target.checked) {
      // Add benefit to array (lowercased)
      setadditional([...additional, event.target.value.toLowerCase()]);
    } else {
      // Remove benefit from array
      const removeItem = additional.filter(
        (item) => item != event.target.value.toLowerCase()
      );
      setadditional(removeItem);
    }
  };

  // ----- Additional benefits handling (edit) -----
  const editadditionalhandler = (event) => {
    if (event.target.checked) {
      seteditadditional([
        ...editadditional,
        event.target.value.toLowerCase(),
      ]);
    } else {
      const editremoveItem = editadditional.filter(
        (item) => item != event.target.value.toLowerCase()
      );
      seteditadditional(editremoveItem);
    }
  };

  // ----- Remove a skill tag (main) -----
  const deleteskillhandler = (index) => {
    const deleteskill = arrskills.filter((item, i) => i != index);
    setarrskills(deleteskill);
  };

  // ----- Remove a skill tag (edit) -----
  const deleteeditskillhandler = (index) => {
    const deleteeditskill = editarrskills.filter((item, i) => i != index);
    seteditarrskills(deleteeditskill);
  };

  // ----- Sidebar control functions -----
  const showSidebar = () => {
    setHide(true);
    document.querySelector("body").style.overflow = "hidden"; // prevent scroll
  };

  const hideSidebar = () => {
    setHide(false);
    document.querySelector("body").style.overflowX = "hidden";
    document.querySelector("body").style.overflowY = "auto";
  };

  // ----- Publish a new job post -----
  const publishpostHandler = () => {
    // Validate all required fields
    if (!jobtitle) {
      settitleErr(true);
      return;
    }
    if (!companyname) {
      setcompanyErr(true);
      return;
    }
    if (!location) {
      setlocationErr(true);
      return;
    }
    if (!jobtype) {
      setjobtypeErr(true);
      return;
    }
    if (!description) {
      setdescriptionErr(true);
      return;
    }
    if (arrskills.length === 0) {
      setskillsErr(true);
      return;
    }
    if (!minsalary) {
      setminErr(true);
      return;
    }
    if (!maxsalary) {
      setmaxsalaryErr(true);
      return;
    }
    if (additional.length === 0) {
      setbenefitsErr(true);
      return;
    }

    // Create new post object and add to posts array
    setposts([
      ...posts,
      {
        id: Date.now(),
        title: jobtitle,
        company: companyname,
        location: location.toLowerCase(),
        jobType: jobtype.toLowerCase(),
        description: description,
        requiredskill: arrskills,
        minsalar: minsalary,
        maxsalary: maxsalary,
        benefits: additional,
        postDate: day + "/" + month + "/" + year,
      },
    ]);
    setmodalMsg('post');

    // Remove from drafts if a draft index is set (publishing from draft)
    drafts.splice(draftindex, 1);

    // Reset form fields and show success modal after a short delay
    setTimeout(() => {
      setPosted(true);
    }, 2000);
  };

  // ----- Hide the success modal -----
  const hidemodalbox = () => {
    setPosted(false);
     skills.current.value = "";
      setjobtitle("");
      setcompanyname("");
      setlocation("");
      setjobtype("");
      setdescription("");
      setminsalary("");
      setmaxsalary("");
  };

  // ----- Delete a post (and remove it from saved jobs) -----
  const deletepost = (index) => {
    const deletedpost = posts[index];
    const deletedPost = posts.filter((item, i) => i != index);
    if (deletedpost) {
      setsavejob((prev) => prev.filter((id) => id !== deletedpost.id));
    }
    setmodalMsg('delete');
    setPosted(true);
    setposts(deletedPost);
  };

  // ----- Load post data into edit form -----
  const editposthandler = (index) => {
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
  };

  // ----- Save edited post -----
  const editpost = () => {
    const updatedPost = [...posts];
    updatedPost[itemIndex] = {
      ...updatedPost[itemIndex],
      id: Date.now(),
      title: editjobtitle,
      company: editcompanyname,
      location: editlocation,
      jobType: editjobtype,
      description: editdescription,
      requiredskill: editarrskills,
      minsalary: editminsalary,
      maxsalary: editmaxsalary,
      benefits: editadditional,
    };
    setTimeout(() => {
      setPosted(true);
      setmodalMsg('update');
    }, 2000);
    setposts(updatedPost);
  };

  // ----- Save a job (add ID to saved list) -----
  const savejobhandler = (id) => {
    if (savejob.includes(id)) {
      alert("already saved");
      return;
    }
    setsavejob([...savejob, id]);
  };

  // ----- Unsave a job (remove ID from saved list) -----
  const deletesavejobhandler = (id) => {
    const deleted = savejob.filter((item) => item != id);
    setsavejob(deleted);
  };

  // ----- Compute list of saved jobs from posts -----
  const savedjobs = posts.filter((post) => savejob.includes(post.id));

  // ----- Save current form as a draft -----
  const savedrafthandler = () => {
    // Validate all fields (same as publish)
    if (!jobtitle) {
      settitleErr(true);
      return;
    }
    if (!companyname) {
      setcompanyErr(true);
      return;
    }
    if (!location) {
      setlocationErr(true);
      return;
    }
    if (!jobtype) {
      setjobtypeErr(true);
      return;
    }
    if (!description) {
      setdescriptionErr(true);
      return;
    }
    if (arrskills.length === 0) {
      setskillsErr(true);
      return;
    }
    if (!minsalary) {
      setminErr(true);
      return;
    }
    if (!maxsalary) {
      setmaxsalaryErr(true);
      return;
    }
    if (additional.length === 0) {
      setbenefitsErr(true);
      return;
    }

    // Add to drafts array
    setdrafts([
      ...drafts,
      {
        id: Date.now(),
        title: jobtitle,
        company: companyname,
        location: location.toLowerCase(),
        jobType: jobtype.toLowerCase(),
        description: description,
        requiredskill: arrskills,
        minsalar: minsalary,
        maxsalary: maxsalary,
        benefits: additional,
        postDate: day + "/" + month + "/" + year,
      },
    ]);
    setmodalMsg('saveasdraft');
    setPosted(true);
  };

  // ----- Provide all state and handlers via context -----
  return (
    <AppContext.Provider
      value={{
        show,
        posts,
        skills,
        jobtitle,
        drafts,
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
        modalMsg,
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
        savejobhandler,
        savedrafthandler,
        setjobtitle,
        setcompanyname,
        setlocation,
        setjobtype,
        setdescription,
        setminsalary,
        setarrskills,
        setadditional,
        setmaxsalary,
        setdraftindex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}