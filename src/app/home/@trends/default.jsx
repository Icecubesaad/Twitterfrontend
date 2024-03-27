import SearchTweet from "@/components/Tweet/SearchTweet"
import Trend from "@/components/cards/Trend"
import AccountSuggestion from "@/components/Suggestions/AccountSuggestion"
const page = () => {
    return (
        <div className="w-full h-full pl-5 mt-10">
            <SearchTweet />
            <div className="flex flex-col pb-10 w-full gap-5 h-auto mt-5">
                <div className="flex flex-col w-[90%] pl-5 pb-5 bg-[#202427] border-[#202427] border-[1px] rounded-xl">
                    <h1 className=" font-bold text-xl mt-4">Trends For You</h1>
                    <Trend Trend={"ICCWorldCup"} Tweets={174} />
                    <Trend Trend={"ICCWorldCup"} Tweets={174} />
                    <Trend Trend={"ICCWorldCup"} Tweets={174} />
                    <Trend Trend={"ICCWorldCup"} Tweets={174} />
                    <Trend Trend={"ICCWorldCup"} Tweets={174} />
                </div>
                <AccountSuggestion />
            </div>
        </div>
    )
}
export default page