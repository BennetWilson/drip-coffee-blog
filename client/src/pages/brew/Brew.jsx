import React, { useState } from "react";
import "./brew.css";
import { Card, Button, Col, Row } from "react-bootstrap";

import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/Sidebar";
import DripCover from "../../Assets/Drip-Cover.jpeg";

export default function Brew() {
  const [methods] = useState([
    {
      image: "coffee-cup",
      methodName: "Cowboy Coffee",
      methodType: "Boil",
      equipment: "pot, open flame",
      description:
        "Unlike the name suggests, the cowboy coffee brew-method is used all over the world. It is one of the easiest methods as it doesn't require any special equipment outside of what most people already have in their kitchen. This method invovles boiling water, adding coffee grounds to the hot water, and pouring it into your mug of choice.",
      steps:
        "1. Boil the desired amount of water in the pot 2. When water reaches a boil take off heat for about 30 seconds or until the water reaches 200F 3. Add ~2 tbsps of ground coffee per 8 ounces of water and stir 4. Let stand for 2 mins and stir again 5. Let stand for another 2 mins then pour 1/2 cup of cold water onto floating grounds to help them sink 6. Pour into cup (if you're worried about grounds pour slowly)",
      pros: "pros- cost effective, relatively easy, full flavor,full bodied",
      cons: "cons - coffee grounds in cup, difficult to keep water temp consistent",
      results: "simple and full bodied cup of joe",
      recipes1: "",
    },
  ]);

  return (
    <>
      <Header />
      <div className="">
        <div className="brew">
          {methods.map((example, i) => (
            <Card key={example.methodName} className="WorkCard">
              <Col className="img-col">
                <img
                  src={require(`../../Assets/coffee-images/${example.image}.png`)}
                  alt="Img of portfolio project"
                  className="project-image"
                />
              </Col>
              <Card.Body>
                <Col>
                  <Card.Text className="description">
                    {example.methodType}
                    <br></br>
                    {example.equipment}
                    <br></br>
                    {example.description}
                    <br></br>
                    {example.steps}
                    <br></br>
                    {example.pros}
                    {example.cons}
                    <br></br>
                    {example.results}
                    <br></br>
                    {example.recipes1}
                  </Card.Text>
                </Col>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <SideBar />
    </>
  );
}
