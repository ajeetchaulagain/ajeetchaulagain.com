import React from 'react'

const Blogs=()=>{
    return (
        <section class="blog-section flex-container">
        <div class="blog-content">
            <h1> From my blog</h1>
            <p>Here are some of my recent projects. I love to share all the process I went while doing the project</p>
            <div class="blogs">
              <div class="blog">
                <a href="#">How to Setup a CI/CD pipeline for MERN stack development</a>
                <p>In this article, I will explain how to setup a MERN stack development with the CI/CD pipeline</p>
              </div>
              <div class="blog">
                  <a href="#">How to Setup a CI/CD pipeline for MERN stack development</a>
                  <p>In this article, I will explain how to setup a MERN stack development with the CI/CD pipeline</p>
                </div>
                <div class="blog">
                    <a href="#">How to Setup a CI/CD pipeline for MERN stack development</a>
                    <p>In this article, I will explain how to setup a MERN stack development with the CI/CD pipeline</p>
                  </div>

                  <div class="blog">
                      <a href="#">How to Setup a CI/CD pipeline for MERN stack development</a>
                      <p>In this article, I will explain how to setup a MERN stack development with the CI/CD pipeline</p>
                    </div>
            </div>
            <a href="#" class="btn">View More Projects</a>
        </div>
      </section>
    )
}

export default Blogs
