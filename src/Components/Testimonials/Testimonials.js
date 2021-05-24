import React, { Component } from 'react'

export default class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>Your work is going to fill a large part of your life, and the only way to be truly satisfied is
                        to do what you believe is great work. And the only way to do great work is to love what you do.
                        If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.
                      </p>
                      <cite>Steve Jobs</cite>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>You can't connect the dots looking forward, you can only connect them looking backward.
                        So you have to trust that they will somehow connect in the future. You have to trust something,
                        your instinct, destiny, life, karma, whatever. 
                      </p>
                      <cite>Steve Jobs</cite>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>The secret of human existence is not only in living, but also in knowing what to live for.  
                      </p>
                      <cite>Fiodor Dostoievski</cite>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>We are in such a hurry to do, write and let our voice be heard in the silence of eternity,
                        that we forget the only really important thing: LIVE!   
                      </p>
                      <cite>Robert Louis Stevenson</cite>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>Perfection is achieved not when there is nothing more to add, but when there is nothing more to take away. 
                      </p>
                      <cite>Antoine de Saint-Exupéry</cite>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>When you are inspired by some great purpose, by some extraordinary project, thoughts break down the barriers; the mind transcends its limitations,
                        consciousness expands in all directions and you find yourself in a wonderful new world. Sleeping strengths, abilities, and talents come to life.
                        In that moment you realize that you are much bigger than you could have ever dreamed of.   
                      </p>
                      <cite>Patañjali</cite>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>What really matters in life are not the goals we set ourselves, but the paths we follow to achieve them. 
                      </p>
                      <cite>Peter Bamm</cite>
                    </blockquote>
                  </li>
                </ul>
              </div>
            </div>
          </div> 
        </div> 
      </section>
    )
  }
}
