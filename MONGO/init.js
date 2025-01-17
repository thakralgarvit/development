// just to important dummy date if needed

const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
        from: "tony",
        to: "sandeep",
        message: "hey its me tony"
    },
    {
        from: "goyal",
        to: "kumar",
        message: "i need new set of tire"
    },
    {
        from: "rishab",
        to: "ravi",
        message: "today i wa slate at work"
    },
    {
        from: "piyush",
        to: "rohit",
        message: "i scored 90+ number"
    },
    {
        from: "diksha",
        to: "gauri",
        message: "i bought these new dresses"
    },
    {
        from: "simran",
        to: "sonali",
        message: "i am thing of going to bali"
    },
    {
        from: "sabhay",
        to: "sanduja",
        message: "CAT exam was difficult today"
    },
    {
        from: "yash",
        to: "mukesh",
        message: "i have started learning editing"
    },
    {
        from: "tushar",
        to: "kanav",
        message: "i meat rahul today"
    },
];

Chat.insertMany(allchats);