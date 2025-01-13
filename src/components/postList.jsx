import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function postList() {
    //usiamo useContext per accedere alla lista dei post dal contesto
    const { posts } = useContext(GlobalContext);

    return (
        <div>
            <h3>Lista Post</h3>
            <div>
                {posts.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}