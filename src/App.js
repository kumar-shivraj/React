import "./App.css";
import ParentComponentOne from "./components/ParentComponentOne";
import ParentComponentTwo from "./components/ParentComponentTwo";
import PureComp from "./components/PureComp";
// import FragmentDemo from "./components/FragmentDemo";
// import Table from "./components/Table";
// import LifeCycleC from "./components/LifeCycleC";
// import LifeCycleA from "./components/LifeCycleA";
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
      {/* ========================  react fragment  =============================== */}
      {/* regular component does not implement the "shouldComponentUpdate" method. It always returns true by default */}
      {/* pure component on the other hand implements shouldComponentUpdate with a shallow props and state comparison */}
      {/* 
      shallow comparison(SC) :
      for premitive types : a (SC) b returns true if a and b have the same value and are of the same type ex : string "Shivraj" (SC) string "Shivraj" returns true
      for complex types : a (SC) b returns true if a and b reference the exact same object. 
      ex :
      ============== premitivs ==================
      var a = [1, 2, 3];
      var b = [1, 2, 3];
      var c = a;

      var ab_eq = (a === b);  // false
      var ac_eq = (a === c);  // true
      ===========================================

      =================== objects ===============
      var a = {x: 1, y:2};
      var b = {x: 1, y:2};
      var c = a;
      
      var ab_eq = (a === b);  // false
      var ac_eq = (a === c);  // true
      ===========================================

      */}
      {/* 
      pure component implements "shouldComponentUpdate" method with a shallow prop and state comparison 
      it does the shallow comparison of : 
      prevState with currentState and
      prevProps with currentProps
      and only if shallow comparison indicates if there is differenct, the component will re-render
      */}

      {/* it is a good idea to ensure that all the children components are also pure to avoid unexpected behaviours */}
      {/* <PureComp /> */}
      {/* <ParentComponentOne /> */}
      <ParentComponentTwo />
      {/* we should not mutate the objects or arrays in props and state. For example
      if we want to add a new item to the list, don't mutate it by pushing the
      item in the list, reference to the array never changes and because pure
      components only check for that, the component won't re-render even if
      there is difference. always return a new object or array when dealing with
      pure components. */}
      {/* ===================================================================================================== */}
      {/* ========================  react fragment  =============================== */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* ===================================================================================================== */}
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
      (i).    static getDerivedStateFromError
      (ii).   componentDidCatch
       */}
      {/* ================================== mounting lifecycle method ======================================== */}
      {/* Order of execution : constructor => getDerivedStateFromProps => render => componentDidMount */}
      {/* (i).  constructor :
       *   A special function tht will get called when a new component is created
       *   initializing the event handlers
       *   Do not cause side effects. Ex : HTTP requests
       *   super(props) -> directly overrite this.state */}
      {/* 
        (ii). getDerivedStateFromProps(props, state)
        *   method is called every time a component is re-rendered
        *   set the state
        *   do not cause any side effects ex : HTTP requests
        *   it is rarely used and it is called when the state of the component depends on change in props over time
        *   set the state. It is static method so it doesn't have access to this keyword.
            so, we can't call the this.setState here. We can directly return an object that sets the state 
            it accepts state and props as parameters and return either null or updated state that represents state of the component
            */}
      {/* (iii). render :
       *   only require method
       * Read props and state and return JSX
       *   Do not change the state or interact with DOM or make AJAX call
       *   Children components lifecycle methods are also executed */}
      {/* (iv). componentDidMount :
      *   Invoked directly after a component and all it's children components have been rendered to the DOM
      *   Cause side effects. Ex : interact with DOM or perform any ajax calls to the load data
          so, componentDidMount is a good place to perform initialization that requires DOM nodes 
          and also load data by making network requests. */}
      {/* <LifeCycleA /> */}
      {/* ======================================================== ======================================== */}
      {/* ================================== updating lifecycle method ======================================== */}
      {/* Order of execution : 
          getDerivedStateFromProps => shouldComponentUpdate => render =>  getSnapShotBeforeUpdate =>  compnentDidUpdate   */}
      {/* 
        (i). getDerivedStateFromProps(props, state)
        *   method is called every time a component is re-rendered
        *   set the state
        *   do not cause any side effects ex : HTTP requests
        *   it is rarely used and it is called when the state of the component depends on change in props over time
        *   set the state. It is static method so it doesn't have access to this keyword.
            so, we can't call the this.setState here. We can directly return an object that sets the state 
            it accepts state and props as parameters and return either null or updated state that represents state of the component
            */}
      {/* (ii). shouldComponentUpdate(nextProps, nextState) : 
        *   it receives the updated props and state as parameters 
        *   it Dictates if the component should re-render or not 
        *   by default all class components re-renders if state or props gets changed. 
            This method prevents re-render by returning false 
        *   compare the existing state and props values with the next props
            and state values and return true or false to react let know whether the
            component should render or not 
        *   performance optimization 
        *   do not cause side effects. Ex : 
            HTTP requests or 
            calling any set state methods 
        * rarely used lifecycle method 
      */}
      {/* (iii). render() :
       *   only require method
       *   Read props and state and return JSX
       *   Do not change the state or interact with DOM or make AJAX call
       *   Children components lifecycle methods are also executed */}
      {/* 
      (iv). getSnapShotBeforeUpdate(prevProps, prevState) :
      *   it receives the updated props and state as parameters 
      *   called right before the changes from virtual DOM are to be reflected in the DOM
      *   capture some information from the DOM
      *   rarely used lifecycle method 
      *   method will either return null or return a value. Returned value will be passed as the third parameter to the componentdidUpdate method.
      * 
      */}
      {/* 
      (v).  compnentDidUpdate(prevProps, prevState, snapShot)
      *   called after the render is finished in the re-render cycles
      *   it is called only once in each re-render cycle
      *   cause side effects => but before making the call, need to compare the prev props and new props and then decide whether to 
          make the network request or not to avoid unnecessary network call
      */}
      {/* <LifeCycleC /> */}
      {/* ======================================================== ======================================== */}
      {/* ================================== unmounting lifecycle method ======================================== */}
      {/* 
          (i). componentWillMount()
          *   method is invoked immediately before a component is unmounted and destroyed
          *   perform some cleanup tasks like :
              cancelling any network requests,
              removing event handlers,
              cancelling any subscription and also invalidating timers
          *   Do not call setState method here. cz component is never re-rendered once it is unmounted
         */}
      {/* ======================================================== ======================================== */}
      {/* ================================== error handling lifecycle method ======================================== */}
      {/* 
          (i).  static getDerivedStateFromError(error)
          (ii). componentDidCatch(error, info)

          This two methods are get called when there is an error during rendering, 
          in a lifecycle method or in the constructor of any child component


         */}
      {/* ======================================================== ======================================== */}
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
