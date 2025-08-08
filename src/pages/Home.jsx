import Category from "../Components/Category";
import Hero from "../Components/Home/Hero";
import SellSection from "../Components/Home/SellSection";

function Home() {
    return ( 
        <>
            
            <Hero></Hero>
            <Category layout="horizontal"></Category>

              {/* Best Seller section:  */}
            <SellSection 
                title="Best Seller" 
                ids={["J001", "J003", "J005", "J007", "GEM001", "GEM003", "GEM005", "GEM007"]}
            />

                {/* Promotion Section*/ }
            <SellSection 
                title="Promotion" 
                ids={["J002", "J004", "J006", "J008", "GEM002", "GEM004", "GEM006", "GEM008"]}
            />
                {/* Latest*/ }
            <SellSection 
                title="Latest" 
                ids={["J009", "J010", "J011", "J012", "GEM009", "GEM010", "GEM011", "GEM012"]}
            />
        </>
     );
}

export default Home;