import React, { useState } from "react";
import "./brew.css";
import { Card, Button, Col, Row } from "react-bootstrap";

import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/Sidebar";
import DripCover from "../../Assets/Drip-Cover.jpeg";

export default function Brew() {
  const [methods] = useState([
    {
      image: "cowboy-coffee",
      methodName: "Cowboy Coffee",
      methodType: "Method: Boil",
      equipment: "Equipment: Metal Pot, Open Flame",
      description: "Unlike the name suggests, the cowboy coffee brew-method is used all over the world. It is one of the easiest methods as it doesn't require any special equipment outside of what most people already have in their kitchen. This method invovles boiling water, adding coffee grounds to the hot water, and pouring it into your mug of choice.",
      step1: "1. Boil the desired amount of water in the pot",
      step2: "2. When water reaches a boil take off heat for about  30 seconds or until the water reaches 200F",
      step3: "3. Add ~2 tbsps of ground coffee per 8 ounces of water and stir",
      step4: "4. Let stand for 2 mins and stir again",
      step5: "5. Let stand for another 2 mins then pour 1/2 cup of cold water onto floating grounds to help them sink",
      step6: "6. Pour into cup (if you're worried about grounds pour slowly)",
      pros: "Pros- cost effective, relatively easy, full flavor,full bodied",
      cons: "Cons - coffee grounds in cup, difficult to keep water temp consistent",
      results: "Results - simple and full bodied cup of joe",
      recipes1: "",
    },
    {
        image: "turkish-coffee",
        methodName: "Turkish Coffee",
        methodType: "Method: Boil",
        equipment: "Equipment: Cezve(wide-bottom pot traditionally used for turkish coffee, turkish coffee cups(optional), sand, granulated sugar",
        description: "While it may seem that the beans used for this brew method are from Turkey, it is actually referring to the grind size. Turkish coffee needs to be ground so fine that it looks like a powder. Traditionally, the powdered coffee is combined with water and boiled repeatedly while running the pot through hot sand. It can also be done without sand by just heating it over the stove.",
        step1: "1. Add water to cezve",
        step2: "2. Add desired amount of sugar(optional) and stir",
        step3: "3. Boil can either be done directly on the stove or by heating up sand in a pan and running the pot throught the sand",
        step4: "4. Boil, remove from heat and add a teaspoon of coffee per cup of water",
        step5: "5. Bring to a boil again",
        step6: "6. Remove from heat after boil, discard the foam, then mix the coffee in well",
        step7: "7. Repeat step 5 two additional times (for a total of 3) back to back but keep the foam from these two additional boils",
        step8: "8. Let grounds settle to the bottom after last boil(add cold water to grounds to accelerate process)",
        step9: "9. Pour into cup and serve",
        pros: "Pros- frothy texture, full bodied flavor",
        cons: "Cons - requires equipment, difficult if using the sand method, small quantities unless using a large pot",
        results: "Results - more complicated than cowboy coffee but because of the fine grind size it is a much more full bodied cup",
        recipes1: "",
      },
      {
        image: "french-press",
        methodName: "French Press",
        methodType: "Steep",
        equipment: "French Press",
        description: "This method uses a large glass cylinder with a metal mesh filter inside it. The grounds are placed on top of the filter and the water is poured on top of the grounds. After steeping the filter plunger is used to seperate the grounds from the coffee.",
        step1: "1. Boil water and allow to cool to around 200F", 
        step2: "2. Add course ground coffee to empty french press", 
        step3: "3. Cover grounds with the hot water and let sit for 20 seconds", 
        step4: "4. Pour remaining water into french press",
        step5: "5. Allow to sit for 4-5 minutes",
        step6: "6. Plunge, pour and enjoy",
        pros: "consistent, full-flavored",
        cons: "coffee grounds in cup, difficult to keep water temp consistent",
        recipe1: ""
    },
    {
        image: "cold-brew",
        methodName: "Cold Brew",
        methodType: "Steep",
        equipment: "Large Container, Fridge",
        description: "This is another easy brew method that requires little time and effort to produce a great tasting cup of coffee. Essentially put the coffee and water in the fridge and pour your coffee the next morning.",
        step1: "1. Combine course ground coffee with desired amount of water inside container", 
        step2: "2. Place container in fridge", 
        step3: "3. Let steep overnight", 
        step4: "4. Strain grounds from water",
        step5: "5. Pour over ice (or not if you like concentrated coffee) and enjoy",
        pros: "easy, nice easy flavors, smooth, can produce as much coffee as you can fit in your fridge",
        cons: "coffee grounds in cup, difficult to keep water temp consistent",
        recipe1: ""
    },
    {
        image: "siphon-brewers",
        methodName: "Siphon Brewers",
        methodType: "Steep",
        equipment: "Siphon Brewer, Heat Source",
        description: "This is a little more complicated than some of the other brew methods. It involves using heat to transfer water to another vessel and re-transfer the water through the coffee grounds. The components can be as intricate or simple as the brewer desires and is, in our opinion, the most entertaining way to brew coffee.",
        step1: "1. Make sure your filter is in the correct position in the hopper (top part of siphon)", 
        step2: "2. Add recently boiled water to the bottom bulb of the siphon", 
        step3: "3. Attach the two pieces together and position over heat source", 
        step4: "4. Heat water until it moves into the hopper",
        step5: "5. Turn down heat source to keep water at around 200F",
        step6: "6. Add coffee grounds to the water and gently stir",
        step7: "7. Let sit for about a minute",
        step8: "8. Remove from the heat source, then stir about 10 times",
        step9: "9. The coffee will then be pulled back into the bottom bulb",
        step10: "10. Remove hopper from the bulb and enjoy",
        pros: "cool to watch, delicate flavors",
        cons: "complicated, can be expensive"
    },

  ]);

  return (
    <>
      <Header />
      <div className="">
      <h1 className="brewTitle">Brewing Methods</h1>
        <div className="brew">
           
          {methods.map((example, i) => (
            <Card key={example.methodName} className="methodCard">
              <Card.Body>
                <Col>
                  <Card.Text className="description">
                  <img
                  src={require(`../../Assets/brew-methods/${example.image}.png`)}
                  alt="Img of portfolio project"
                  className="methodImage"
                />
                  <br></br>
                    <div className="methodName">{example.methodName}</div>
                    <br></br>
                   <div className="methodType">{example.methodType}</div> 
                    <br></br>
                    <div className="methodType">{example.equipment}</div>
                    <br></br>
                    <div className="methodDesc">{example.description}</div>
                    <br></br>
                    <div className="methodSteps">{example.step1}</div>
                    <div className="methodSteps">{example.step2}</div>
                    <div className="methodSteps">{example.step3}</div>
                    <div className="methodSteps">{example.step4}</div>
                    <div className="methodSteps">{example.step5}</div>
                    <div className="methodSteps">{example.step6}</div>
                    <div className="methodSteps">{example.step7}</div>
                    <div className="methodSteps">{example.step8}</div>
                    <div className="methodSteps">{example.step9}</div>
                    <br></br>
                    <div className="prosCons">
                    <div className="methodPro">{example.pros}</div>
                    <br></br>
                    <div className="methodPro">{example.cons}</div>
                    <br></br>
                    </div>
                    <div className="methodRes"> {example.results}</div>
                    <br></br>
                    {example.recipes1}
                  </Card.Text>
                </Col>
              </Card.Body>
            </Card>
          ))}
        </div>
        <SideBar />
      </div>
    </>
  );
}
