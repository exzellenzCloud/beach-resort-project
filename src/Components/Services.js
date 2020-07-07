import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info:
          "And then you can write a normal React component. As I said above, Next.js is for building React applications.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "And then you can write a normal React component. As I said above, Next.js is for building React applications.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle",
        info:
          "And then you can write a normal React component. As I said above, Next.js is for building React applications.",
      },
      {
        icon: <FaBeer />,
        title: "Strong Beer",
        info:
          "And then you can write a normal React component. As I said above, Next.js is for building React applications.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <info>{item.info}</info>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
