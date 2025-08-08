import Category from "../Components/Category";
import Hero from "../Components/Home/Hero";
import SellSection from "../Components/Home/SellSection";

function Home() {
    const homeSections = [
  {
    title: "Best Seller",
    ids: ["J001", "J003", "J005", "J007", "GEM001", "GEM003", "GEM005", "GEM007"]
  },
  {
    title: "Promotion",
    ids: ["J002", "J004", "J006", "J008", "GEM002", "GEM004", "GEM006", "GEM008"]
  },
  {
    title: "Latest",
    ids: ["J009", "J010", "J011", "J012", "GEM009", "GEM010", "GEM011", "GEM012"]
  }
];
    return ( 
        <>
            
            <Hero></Hero>
            <div className="d-flex flex-column align-items-center ">
                <h2 className="text-center mt-5 mb-3 ">Categories</h2>
            <Category layout="horizontal"></Category>
            </div>

              {/* Sell Section */}
            {homeSections.map((section, index) => (
                <SellSection
                    key={index}
                    title={section.title}
                    ids={section.ids}
                />
            ))}
        </>
     );
}

export default Home;