import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { FaLongArrowAltDown } from "react-icons/fa";
import "./Value.css";
import data from "./Accordion";

const Value = () => {
  return (
    <section className="v-wrapper flexCenter">
      <div className="paddings v-container">
        <div className="v-left  flexCenter ">
          <div className="image-container  flexCenter">
            <img src="./value.png" alt="" />
          </div>
        </div>

        <div className="v-right flexColStart">
          <span className="orangeText">Our value</span>
          <span className="primaryText">value we give to you</span>
          <span className="secondaryText">
            we always ready to help by providingthe best servies for you.
            <br />
            we beleive a good blace to live can make your life better.
          </span>

          <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className="accordion"
          >
            {data.map((item, i) => {
              return (
                <AccordionItem className="accordionitem" key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordionbtn flexCenter">
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText ">{item.heading}</span>
                      <div className="flexCenter icon">
                        <FaLongArrowAltDown size={20}></FaLongArrowAltDown>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryTex">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
