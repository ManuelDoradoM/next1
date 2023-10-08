import { Suspense } from "react"
import PostPages from "../page"

async function loadPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = res.json()

    return data
}

async function PostPage( {params} ){
    
    const post = await loadPost(params.postId)

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>

            <hr/>
            <h4>Otras publicaciones</h4>
            <Suspense fallback={<div>Cargando publicaciones ...</div>}>
                <PostPages />
            </Suspense> 
        </div>
    )
}

export default PostPage;