import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = new FormData(e.target);

    try {
        await axios.post(
            "http://localhost:3000/create-post",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        navigate("/feed");
    } catch (err) {
        console.error(err);
    }
};
    return (
        <section className="create-post-section">
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" name="image" accept="image/*" />
                <input type="text" name='caption' placeholder="Enter Caption" required />
                <button type="submit">Create Post</button>
            </form>
        </section>
    );
};

export default CreatePost;