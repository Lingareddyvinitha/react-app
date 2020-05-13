import { observable, action, autorun } from 'mobx'

class Store {
    array = observable({
        title: "Foo",
        author: {
            name: "Michel"
        },
        likes: ["John", "Sara"]

    })
    twitterUrls = observable.map({
        John: "twitter.com/johnny"
    })

    temperature = observable.box(20)



    disposer2 = autorun(() => {
        console.log("disposer2", (this.twitterUrls.get("Sara")))
    })
    @action.bound
    increment() {
        alert("increment")
        this.twitterUrls.set("Sara", "twitter.com/horsejs")
        this.array.likes.push("vin")
        this.array.author.name = "Chesterton"
        this.temperature.set(25)
        //return this.array.likes.push("Jennifer");

    }
    disposer = autorun(reaction => {
        console.log("auto run", this.array.likes.length)
    })
    disposer3 = autorun(() => {
        console.log("disposer3", this.temperature.get)
    })


}
const store = new Store()
export default store
