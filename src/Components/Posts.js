// 1 - Create Structure
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost , deletePost , updatepost} from "../Redux/postssSlice";


export default function Posts () {
    // 5 - 1
    // 1st Hook ... useState ... Create New 2 States
    // عشان يشوف التغيرات الى بتحصل فى خانات الكتابة
    const [Title , setTitle] = useState("");
    const [Body , setBody] = useState("");
    // console.log(Title , Body);
    
    // new 2 states for updated 
    const [updatedTitle , setupdatedTitle] = useState("");
    const [updatedBody , setupdatedBody] = useState("");

    // 1st step in Edit Post ... create state
    const [isEdit , setisEdit] = useState(false);
    const [id , setid] = useState(null);

    // 5 - 3
    // 2nd Hook ... useDispatch() to let addPost works after click on bottun
    const dispatch = useDispatch()

    // 3rd Hook ... get all state from redux ... to map them
    // reducer name[posts]عشان اختار الstoreبعد كده بيروح اوتوماتك ل stateبكتب
    // posts will send me to postSlice ... then get items 
    const posts = useSelector((state)=> state.posts.items)
    // posts اللى فوقى دى
    // items arrayفيها كل البوستات الى العميل بيكتبها ويضفها لان دى جواها 
    // add post اللى لماالعميل بيدوس 
    // البوست بيتحط جواها 


    //this func works onClick on [Add Post] Button to dispatch the action to reducer
    const handleAddPost = () => {
        if (Title.length > 0 && Body.length > 0) {
            // this data send to action.payload
            // addPost takes title/body to send them as (action) to reducer to change state
            dispatch(addPost({ id: posts.length + 1 , Title , Body }));
            //  تفضى inputs الadd post عشان بعد ما ادوس 
            setTitle("");
            setBody("");
        };
    }

    return (
        <div>
            <div className="form">

                <input 
                    type="text" 
                    placeholder="Add Post Title"
                    onChange={(Ele) => setTitle(Ele.target.value)}
                    value={Title}
                />

                <input 
                    type="text" 
                    placeholder="Add Post Body"
                    onChange={(Ele) => setBody(Ele.target.value)}
                    value={Body}
                />

                <button onClick={handleAddPost}
                >Add Post 
                </button>

            </div>

            <div className="posts" >
                
                {posts.length > 0 ? posts.map((e) => 

                    <div key={e.id} className="post">
                        <h2>{e.Title}</h2>
                        <p>{e.Body}</p>

                        <button onClick= { () => 
                            // {id: e.id} this data will send & added to action.payload
                            // Ex : action.payload = {e.id}  could be (1,2,3,...)
                            {dispatch(deletePost({id: e.id}))}}>
                            Delete Post
                        </button>

                        <button onClick = {() => {
                            setisEdit(true)
                            setid(e.id)
                            }} >Edit Post
                        </button>
                        
                        <br/>
                        
                        {isEdit && id === e.id && (
                            <form className="UpdateForm">
                                <input 
                                    type="text" 
                                    placeholder="Updated Title"
                                    onChange={(Ele)=>setupdatedTitle(Ele.target.value)}
                                ></input>

                                <input 
                                    type="text" 
                                    placeholder="Updated Body"
                                    onChange={(Ele)=>setupdatedBody(Ele.target.value)}
                                ></input>

                                <button onClick = { () => {
                                    dispatch(updatepost({id: e.id, Title:updatedTitle, Body:updatedBody}))
                                    setisEdit(false) // to hide edit form again
                                    }}>
                                    Update Post
                                </button>
                            </form>   
                        )};                         
                    </div> 
                ): <p className="show">No posts to show</p> }

                        

                        {/* Or */}
                        {/* {Edit === true ?  
                            <form>
                                <input type="text" placeholder="Update Title"></input>
                                <input type="text" placeholder="Update Body"></input>
                                <button>Update Post</button>
                            </form> : (null) 
                        }; */}
            </div>

        </div>       
    )
}