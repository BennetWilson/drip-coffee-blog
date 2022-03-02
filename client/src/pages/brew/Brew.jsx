import React, { useState } from "react";
import "./brew.css";
import { Card, Row, Col, Container } from "react-bootstrap";

import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/Sidebar";

export default function Brew() {
  const [methods] = useState([
    {
      image: "cowboy-coffee",
      methodName: "Cowboy Coffee",
      methodType: "Boil",
      equipment: "Metal Pot, Open Flame",
      description:
        "Unlike the name suggests, the cowboy coffee brew-method is used all over the world. It is one of the easiest methods as it doesn't require any special equipment outside of what most people already have in their kitchen. This method invovles boiling water, adding coffee grounds to the hot water, and pouring it into your mug of choice.",
      step1: "1. Boil the desired amount of water in the pot",
      step2:
        "2. When water reaches a boil take off heat for about  30 seconds or until the water reaches 200F",
      step3: "3. Add ~2 tbsps of ground coffee per 8 ounces of water and stir",
      step4: "4. Let stand for 2 mins and stir again",
      step5:
        "5. Let stand for another 2 mins then pour 1/2 cup of cold water onto floating grounds to help them sink",
      step6: "6. Pour into cup (if you're worried about grounds pour slowly)",
      pros: "cost effective, relatively easy, full flavor,full bodied",
      cons: "coffee grounds in cup, difficult to keep water temp consistent",
      recipes1: "",
    },
    {
      image: "turkish-coffee",
      methodName: "Turkish Coffee",
      methodType: "Method: Boil",
      equipment:
        "Equipment: Cezve(a wide-bottomed pot traditionally used for turkish coffee), turkish coffee cups(optional), sand(optional), granulated sugar",
      description:
        "While it may seem that the beans used for this brew method are from Turkey, it is actually referring to the grind size. Turkish coffee needs to be ground so fine that it looks like a powder. Traditionally, the powdered coffee is combined with water and boiled repeatedly while running the pot through hot sand. It can also be done without sand by just heating it over the stove.",
      step1: "1. Add water to cezve",
      step2: "2. Add desired amount of sugar(optional) and stir",
      step3:
        "3. Boil can either be done directly on the stove or by heating up sand in a pan and running the pot throught the sand",
      step4:
        "4. Boil, remove from heat and add a teaspoon of coffee per cup of water",
      step5: "5. Bring to a boil again",
      step6:
        "6. Remove from heat after boil, discard the foam, then mix the coffee in well",
      step7:
        "7. Repeat step 5 two additional times (for a total of 3) back to back but keep the foam from these two additional boils",
      step8:
        "8. Let grounds settle to the bottom after last boil(add cold water to grounds to accelerate process)",
      step9: "9. Pour into cup and serve",
      pros: "frothy texture, full bodied flavor",
      cons: "requires equipment, difficult if using the sand method, small quantities unless using a large pot",
      recipes1: "",
    },
    {
      image: "french-press",
      methodName: "French Press",
      methodType: "Method: Steep",
      equipment: "Equipment: French Press",
      description:
        "This method uses a large glass cylinder with a metal mesh filter inside it. The grounds are placed on top of the filter and the water is poured on top of the grounds. After steeping the filter plunger is used to separate the grounds from the coffee.",
      step1: "1. Boil water and allow to cool to around 200F",
      step2: "2. Add course ground coffee to empty french press",
      step3: "3. Cover grounds with the hot water and let sit for 20 seconds",
      step4: "4. Pour remaining water into french press",
      step5: "5. Allow to sit for 4-5 minutes",
      step6: "6. Plunge, pour and enjoy",
      pros: "Pros - consistent, full-flavored",
      cons: "Cons - coffee grounds in cup, difficult to keep water temp consistent",
      recipe1: "",
    },
    {
      image: "cold-brew",
      methodName: "Cold Brew",
      methodType: "Method: Steep",
      equipment: "Equipment: Large Container, Fridge",
      description:
        "This is another easy brew method that requires little time and effort to produce a great tasting cup of coffee. Essentially, put the coffee and water in the fridge and pour your coffee the next morning.",
      step1:
        "1. Combine course ground coffee with desired amount of water inside container",
      step2: "2. Place container in fridge",
      step3: "3. Let steep overnight",
      step4: "4. Strain grounds from water",
      step5:
        "5. Pour over ice (or not if you like concentrated coffee) and enjoy",
      pros: "Pros - easy, nice easy flavors, smooth, can produce as much coffee as you can fit in your fridge",
      cons: "Cons - coffee grounds in cup, difficult to keep water temp consistent",
      recipe1: "",
    },
    {
      image: "siphon-brewers",
      methodName: "Siphon Brewers",
      methodType: "Method: Steep",
      equipment: "Equipment: Siphon Brewer, Heat Source",
      description:
        "This is a little more complicated than some of the other brew methods. It involves using heat to transfer water to another vessel and re-transfer the water through the coffee grounds. The components can be as intricate or simple as the brewer desires and is, in our opinion, the most entertaining way to brew coffee.",
      step1:
        "1. Make sure your filter is in the correct position in the hopper (top part of siphon)",
      step2: "2. Add recently boiled water to the bottom bulb of the siphon",
      step3: "3. Attach the two pieces together and position over heat source",
      step4: "4. Heat water until it moves into the hopper",
      step5: "5. Turn down heat source to keep water at around 200F",
      step6: "6. Add coffee grounds to the water and gently stir",
      step7: "7. Let sit for about a minute",
      step8: "8. Remove from the heat source, then stir about 10 times",
      step9: "9. The coffee will then be pulled back into the bottom bulb",
      step10: "10. Remove hopper from the bulb and enjoy",
      pros: "Pros - cool to watch, delicate flavors",
      cons: "Cons - complicated, can be expensive",
    },
    {
      image: "pour-over",
      methodName: "Pourover",
      methodType: "Method: Drip",
      equipment:
        "Equipment: Pourover Divice(V60 or Kalita Wave), Filters, Scale(optional), Kettle, Heat Source",
      description:
        "Many people who choose this brew method like to be as precise as possible when measuring out the amount of coffee and water to ensure they get as consistent as possible with each cup. While measuring everything keeps your coffee consistent, it is not required. If you just want a good cup of coffee you can just put the grounds in the filter, pour some water on top and enjoy your coffee.",
      step1:
        "1. Use the kettle to boil more water than you are planning on using",
      step2:
        "2. Put filter into brewing device and put your grounds into the filter",
      step3: "3. If you are measuring, make sure your divice is on the scale",
      step4:
        "4. Grind your desired amount of coffee for your cup size(usually about 1g of coffee per 17g of water)",
      step5:
        "5. Cover the grounds with hot water (around 200F) and let the grounds bloom",
      step6:
        "6. After about 30 seconds pour your desired amount of water over the grounds",
      step7: "7. Allow the coffee to drip into the cup and enjoy when finished",
      pros: "Pros - consistent, delicate",
      cons: "Cons - time consuming, can be expensive",
    },
    {
      image: "percolator",
      methodName: "Percolators",
      methodType: "Method: Drip",
      equipment: "Equipment: Percolator, Kettle, Heat Source",
      description:
        "This method requires the brewer to boil water before putting the water into the percolator. From there additional heat is added to the bottom to force the boiling water up the tube to be spread over the grounds, thus the sputtering sound.",
      step1: "1. Boil water then add to the base of the percolator",
      step2:
        "2. Put your desired amount of coffee grounds into the filter basket",
      step3:
        "3. Screw the top onto the base and place percolator on a heat source",
      step4:
        "4. You'll know it is working when you hear sputtering (if the coffee overflows turn the heat down)",
      step5: "5. When the sputtering stops, remove from heat",
      step6: "6. Discard the grounds and enjoy",
      pros: "Pros - durable, portable, can be taken camping, full bodied cup",
      cons: "Cons - learning curve, not time efficient",
    },
    {
      image: "chemex",
      methodName: "Chemex",
      methodType: "Drip",
      equipment: "Chemex, Filters, Kettle, Heat Source",
      description:
        "The Chemex is one of the better known methods by coffee connoisseurs and has been producing great cups of coffee since 1941. It is an identical process to the pourover, but instead of brewing directly into your cup the coffee is held in the bottom the chemex. This is essentially a way to make pourover coffee but in a larger than single cup quantity.",
      step1:
        "1. Use the kettle to boil more water than you are planning on using",
      step2: "2. If you are measuring, make sure your divice is on the scale",
      step3:
        "3. Put filter into chemex and put your grounds into the filter (measure if desired)",
      step4:
        "4. Grind your desired amount of coffee for your cup size(usually about 1g of coffee per 17g of water)",
      step5:
        "5. Cover the grounds with hot water (around 200F) and let the grounds bloom",
      step6:
        "6. After about 30 seconds pour your desired amount of water over the grounds",
      step7:
        "7. Allow the coffee to drip into the chemex, pour into your cup and enjoy",
      pros: "larger than a single cup, looks fantastic, consistent taste",
      cons: "absolutely giant paper filters, not very portable because it's glass",
    },
    {
      image: "clever-dripper",
      methodName: "Clever Dripper",
      methodType: "Drip",
      equipment: "Clever Dripper, Kettle, Heat Source",
      description:
        "This brew method is similar to the pour over with the important difference of being able to stop the flow of coffee out of the bottom of the brewer. This allows the grounds to steep before filtering out resulting in a more full-flavored cup compared to the pourover.",
      step1: "1. Bring water to a boil",
      step2: "2. Place filter in dripper and add grounds",
      step3:
        "3. Pour desired amount of water onto grounds, cover and let steep for 1 minute",
      step4:
        "4. Uncover and stir to mix the grounds then cover again and let sit for 2 1/2 minutes",
      step5: "5. Stir again",
      step6: "6. Place dripper over your cup, pour and enjoy",
      pros: "full-flavored, consistent",
      cons: "takes a while",
    },
    {
      image: "auto-drip-machine",
      methodName: "Auto Drip Machines",
      methodType: "Drip",
      equipment: "Auto Drip Machine",
      description:
        "This is probably the most common brew method. When most people when they think of a coffee maker, this is the image that pops into their head. It is an automatic coffee maker that requires you to put ground coffee and water into it and push the start button. When you come back you have a carafe full of coffee.",
      step1: "1. Add water to the reservoir and place filter into coffee maker",
      step2: "2. Add your desired amount of ground coffee to the filter",
      step3:
        "3. Start the brewing process via the button or switch on the maker",
      step4: "4. When the coffee is done brewing you can pour and enjoy",
      pros: "easy, it's very easy, large quantity, easy",
      cons: "can get expensive, not much control over brewing process",
    },
    {
      image: "espresso-machine",
      methodName: "Espresso Machines",
      methodType: "Pressure",
      equipment: "Espresso Machine",
      description:
        "An espresso machine is similar to the auto drip in that depending on how expensive you go, the whole process can be automated. A staple in making lots of different coffee drinks.",
      step1: "1. Turn on and preheat espresso machine",
      step2: "2. Add your coffee to the portafilter and tamp it down flat",
      step3:
        "3. The next steps vary depending on your machine but next you pull your first shot",
      step4: "4. Discard the puck of grounds",
      pros: "caffeine, caffeine, caffeine, caffeine",
      cons: "learning curve, expensive",
    },
    {
      image: "aeropress",
      methodName: "Aeropress",
      methodType: "Pressure",
      equipment: "Aeropress, Filters, Kettle, Heat Source",
      description:
        "This method is one of the most portable as the aeropress is a small, plastic set of cylinders that fit together. Using the inverted method, the coffee is allowed to steep for a more full-flavored cup. The traditional method of brewing is similar to a pourover, resulting in a more delicate flavor. The main difference between the aeropress and the pourover is, as the name suggests, you press the plunger down to add pressure to the coffee while it's going throught the filter.",
      step1:
        "1. Place the plunger about an inch into the cylinder and set down with the filter side up",
      step2: "2. Put desired amount of grounds into the reservoir",
      step3:
        "3. Fill to about 1/2 inch from the top and cover with filter and cap",
      step4: "4. Let steep for 4 minutes",
      step5:
        "5. Place cup upside down on the cap and flip everything right side up together",
      step6:
        "6. Press the coffee into the cup taking about 1 minute, stop when you hear a hissing sound",
      pros: "full-flavored, consistent",
      cons: "takes a while",
    },
  ]);

  return (
    <>
      <Header />
      <div className="brewBackground">
        <h1 className="brewTitle">Brewing Methods</h1>
        <div className="brew">
          {methods.map((example, i) => (
            <Card key={example.methodName} className="methodCard">
              <Card.Body className="cardBody ">
                <Container></Container>
                <Row>
                  <Col xs={3} className="d-flex align-items-center justify-content-center">
                    <img
                      src={require(`../../Assets/brew-methods/${example.image}.png`)}
                      alt="Img of portfolio project"
                      className="methodImage"
                    />
                  </Col>
                  <Col xs={9}>
                    <Col>
                      <div className="methodName">{example.methodName}</div>
                      <div className="prosCons">
                      <h5 className="pcTitle">Pros:</h5>
                        <div className="methodPro">{example.pros}</div>
                        <h5 className="pcTitle">Cons:</h5>
                        <div className="methodPro">{example.cons}</div>
                      </div>
                    </Col>
                    <Row>
                      <Col className="description">
                        <Card.Text>
                          {/* <br></br> */}
                          <Col>
                            {/* <br></br> */}
                            <div className="methodType">
                              <h5>Method</h5>
                              {example.methodType}
                            </div>
                            {/* <br></br> */}
                            <div className="methodType">
                            <h5>Equipment</h5>
                              {example.equipment}
                            </div>
                            {/* <br></br> */}
                            <div className="methodDesc">
                            <h5>Description</h5>
                              {example.description}
                            </div>
                          </Col>
                        </Card.Text>
                      </Col>
                      <Col>
                        <Row>
                          <div className="steps">
                            <div className="methodSteps">{example.step1}</div>
                            <div className="methodSteps">{example.step2}</div>
                            <div className="methodSteps">{example.step3}</div>
                            <div className="methodSteps">{example.step4}</div>
                            <div className="methodSteps">{example.step5}</div>
                            <div className="methodSteps">{example.step6}</div>
                            <div className="methodSteps">{example.step7}</div>
                            <div className="methodSteps">{example.step8}</div>
                            <div className="methodSteps">{example.step9}</div>
                          </div>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  {/* <br></br> */}

                  {/* <br></br> */}

                  {/* <br></br> */}
                  {/* <div className="methodRecipes">{example.recipes1}</div> */}
                </Row>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="sideBarBrew">
        <SideBar />
        <div>
        </div>
      </div>
      </div>
    </>
  );
}
