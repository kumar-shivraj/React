import "./App.css";
// import Form from "./components/Form";
// import styles from "./components/appStyles.module.css";
// import "./components/appStyles.css";
// import InlineOne from "./components/InlineOne";
// import Inline from "./components/Inline";
// import Stylesheet from "./components/Stylesheet";
// import NameList3 from "./components/NameList3";
// import NameList2 from "./components/NameList2";
// import NameList from "./components/NameList";
// import UserGreeting from "./components/UserGreeting";
// import ParentComponent from "./components/ParentComponent";
// import EventBind from "./components/EventBind";
// import ClassClick1 from "./components/ClassClick1";
// import FunctionClick1 from "./components/FunctionClick1";
// import Welcome1 from "./components/Welcome1";
// import Greet1 from "./components/Greet1";
// import Counter1 from "./components/Counter1";
// import ClassClick from "./components/ClassClick";
// import FunctionClick from "./components/FunctionClick";
// import Counter from "./components/Counter";
// import Message from "./components/Message";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      {/* ========================  Lifecycle Methods in Class Components  =============================== */}
      {/* 
      we can mainly classify the Lifecycle methods in below 4 phases 
      1. Mounting
      2. Updating 
      3. Unmounting 
      4. Error Handling 
      */}

      {/* 
      during the mounting phase, we have 4 methods :
      (i).    constructor
      (ii).   static getDerivedStateFromProps
      (iii).  render and
      (iv).   componentDidMount
       */}

      {/* 
      during the updating phase, we have 5 methods :
      (i).    static getDerivedStateFromProps
      (ii).   shouldComponentUpdate
      (iii).  render
      (iv).   getSnapShotBeforeUpdate and
      (v).    componentDidUpdate
       */}

      {/* 
      during the unmounting phase, we just have 1 method :
      (i).   componentWillMount
       */}

      {/* 
      during the error handling phase, we have 2 methods :
      (i).   static getDerivedStateFromError
      (ii).   componentDidCatch
       */}

      {/* ===================================================================================================== */}
      {/* ========================  Forms in React  =============================== */}
      {/* <Form /> */}
      {/* ===================================================================================================== */}
      {/* ========================  Styling in React  =============================== */}
      {/* 1.  CSS stylesheet */}
      {/* 2.  Inline style */}
      {/* 3.  CSS Modules */}
      {/* 4.  CSS in JS Libraries (Styled Components) */}
      {/* CSS stylesheet */}
      {/* <Stylesheet /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <Stylesheet primary={false} /> */}
      {/* Inline style */}
      {/* <Inline /> */}
      {/* CSS Modules */}
      {/* it works with react scripts version 2 or higher */}
      {/* there is a file name convension is used for modules css with create react app. */}
      {/* this convension is that file name must be suffixed with .module.css  */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* one another advantage of module css is that classes are locally scoped by default */}
      {/* <InlineOne /> */}
      {/* ===================================================================================================== */}
      {/* ========================  List Rendering  =============================== */}
      {/* <NameList /> */}
      {/* <NameList2 /> */}
      {/* <NameList3 /> */}
      {/* ===================================================================================================== */}
      {/* ========================  Method as props, child can pass the data to parent  =============================== */}
      {/* <UserGreeting /> */}
      {/* ===================================================================================================== */}
      {/* ========================  Method as props, child can pass the data to parent  =============================== */}
      {/* <ParentComponent /> */}
      {/* ===================================================================================================== */}
      {/* ========================  Binding event handler  =============================== */}
      {/* <EventBind /> */}
      {/* ===================================================================================================== */}
      {/* ========================  event handling  =============================== */}
      {/* <FunctionClick1 /> */}
      {/* <ClassClick1 /> */}
      {/* ===================================================================================================== */}
      {/* ========================  destructuring props  =============================== */}
      {/* <Greet1 name="Bruce" heroName="Batman" /> */}
      {/* <Greet1 name="Clark" heroName="Superman" /> */}
      {/* <Welcome1 name="Bruce" heroName="Batman" />
      <Welcome1 name="Clark" heroName="Superman" /> */}
      {/* <Welcome name="Diana" heroName="Wonder woman" /> */}
      {/* ===================================================================================================== */}
      {/* ========================  understanding setState in class Component =============================== */}
      {/* <Counter1 /> */}
      {/* ===================================================================================================== */}
      {/* ========================  understanding destructuring props and state =============================== */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* ===================================================================================================== */}
      {/* ========================  understanding destructuring props and state =============================== */}
      {/* <Greet name="Bruce" heroName="Batman" /> */}
      {/* <Greet name="Clark" heroName="Superman" /> */}
      {/* <Welcome name="Bruce" heroName="Batman" /> */}
      {/* <Welcome name="Clark" heroName="Superman" /> */}
      {/* <Welcome name="Diana" heroName="Wonder woman" /> */}
      {/* ===================================================================================================== */}
      {/* ========================  understanding setState  =================================================== */}
      {/* <Counter /> */}
      {/* ===================================================================================================== */}
      {
        // ======== understanding state =============================================================================
      }
      {/* <Message /> */}
      {
        // ======== understanding state ends  =======================================================================
      }
      {/*  ================================== understanding props  ===========================================*/}
      {/*
      {
        // ========  ===========
      }

      <Greet name="Bruce" heroName="Batman" />
      <Greet name="Clark" heroName="Superman" />

      {
        // <Greet name="Diana" heroName="Wonder woman"/>
      }

      <Greet name="Diana" heroName="Wonder woman">
        <p>This is children props</p>
      </Greet>

      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>

      {
        //  ====  props with class component  ===
      }
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder woman" />
      
      */}
      {/*  ===============================================================================================*/}
      {
        //==================================== Basic understanding =======================================
      }
      {/*
        <Greet />
        <Welcome />
        <Hello />
      */}
      {
        //======================================= Basic understanding ends ================================
      }
    </div>
  );
}

export default App;
