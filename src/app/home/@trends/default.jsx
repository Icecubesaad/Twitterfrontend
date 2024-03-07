import SearchTweet from "@/components/Tweet/SearchTweet"
import Trend from "@/components/cards/Trend"
import AccountSuggestion from "@/components/Suggestions/AccountSuggestion"
const page=()=>{
    return(
        <div className="w-full h-full pl-5 mt-10">
                <SearchTweet/>
                <div className="flex flex-col w-full">
                <h1 className=" font-bold text-xl mt-8">Trends For You</h1>
                <Trend Trend={"ICCWorldCup"} Tweets={174} />
                <Trend Trend={"ICCWorldCup"} Tweets={174} />
                <Trend Trend={"ICCWorldCup"} Tweets={174} />
                <Trend Trend={"ICCWorldCup"} Tweets={174} />
                <Trend Trend={"ICCWorldCup"} Tweets={174} />
                <AccountSuggestion/>
                </div>
        </div>
    )
    }
    export default page