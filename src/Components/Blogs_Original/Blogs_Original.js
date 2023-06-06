import React from "react";
import Blog_Card from "../Blogs_Card/Blogs_Card";
// import Footer from "../Footer/Footer";
export default function Blogs_Original() {
  return (
    <>
      <div className="overflow-auto">
        <Blog_Card
          title="The Importance Of Influencer Marketing In The 'New Normal' Digital Sphere"
          innerText={"There is a saying that “there are decades where nothing happens, and there are weeks where decades happen.” 2020 was the latter. As both brands and consumers adjust to this “new normal” and become ever more confident online, 2021 will take no prisoners in the digital sphere.".slice(
            0,
            300
          )}
          link="https://www.forbes.com/sites/forbesagencycouncil/2021/03/02/the-importance-of-influencer-marketing-in-the-new-normal-digital-sphere/"
          btnText="Click to read full article"
        />
        <Blog_Card
          title="What is influencer marketing?"
          innerText={"Once it was Mary Kay cosmetics and coiffed ladies driving pink Cadillacs. Now it is waist trainers, hair growth gummy vitamins, and green protein powder supplements. The most glamorous and charismatic among us have always influenced how others aspire to live—including the products people buy to support their lifestyle dreams. But only recently, with the advent of social media, has influencing people become an actual job.".slice(
            0,
            300
          )}
          link="https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-influencer-marketing"
          btnText="Click to read full article"
        />
        <Blog_Card
          title="Does Influencer Marketing Really Pay Off?"
          innerText={"In 2022, the influencer industry reached $16.4 billion. More than 75% of brands have a dedicated budget for influencer marketing, from Coca Cola’s #ThisOnesFor campaign in collaboration with fashion and travel influencers, to Dior is award-winning 67 Shades campaign in which the brand partnered with diverse influencers to promote its Forever Foundation product line. But does investing in influencers really pay off?".slice(
            0,
            300
          )}
          link="https://hbr.org/2022/11/does-influencer-marketing-really-pay-off"
          btnText="Click to read full article"
        />
        <Blog_Card
          title="Discover New Leads and Brand Growth with Influencer Marketing"
          innerText={"The COVID-19 pandemic fueled significant growth in influencer marketing. Almost one in three Gen Z and baby boomers said content creators provided a sense of community during the pandemic. With the need to appeal to Gen Z consumers and create a virtual experience, influencer marketing increased by 470% from 2016 to 2020. An influencer is a celebrity, public figure or content creator with an organic and engaged audience. Influencer marketing leverages the credibility of a popular content creator to promote your brand through paid endorsements and recommendations. Partnering with influencers gives you direct access to a segment of prospects that need and want to buy your product.".slice(
            0,
            300
          )}
          link="https://www.bigcommerce.com/articles/ecommerce/influencer-marketing/"
          btnText="Click to read full article"
        />
        {/* <Footer aboutUs="We provide an easy-to-use platform for organizations that want advertisements through well-known influencers."/> */}
      </div>
    </>
  );
}
