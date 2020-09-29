let arrayobj = [{

    img: "./download.jpg",
    authorName: "ROBERT DOWNEY Jr",
    jobprof: "ACTOR",
    infor:"Robert John Downey Jr. (born April 4, 1965)[1] is an American actor and producer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success in middle age"



},
    { img: "./elon.jpg",
    authorName: "ELON MUSK",
    jobprof: "Engineer",
    infor:"Elon Reeve Musk FRS (/ˈiːlɒn/; born June 28, 1971) is a business magnate, industrial designer, engineer, and philanthropist.[6] He is the founder, CEO, CTO and chief designer of SpaceX; early investor,[b] CEO and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink; and co-founder and initial co-chairman of OpenAI. He was elected a Fellow of the Royal Society (FRS) in 2018.[9][10] In 2018"
    


    },
    {
    
        img: "./buffet.jpg",
        authorName: "WARREN BUFFETT",
        jobprof: "Businessman",
        infor:"Warren Edward Buffett (/ˈbʌfɪt/; born August 30, 1930)[2] is an American investor, business tycoon, philanthropist, and the chairman and CEO of Berkshire Hathaway. He is considered one of the most successful investors in the world[3][4] and has a net worth of US$78.9 billion as of August 2020, making him the world's seventh-wealthiest person."

    },
    {
    
        img: "./ajay-atul.jpg",
        authorName: "AJAY-ATUL",
        jobprof: "Musician",
        infor:"Ajay-Atul (Marathi: अजय-अतुल) is the music alias of Indian music director duo of brothers Ajay and Atul Gogavale.[1] They are working on Ranbir Kapoor's Shamshera, Amitabh Bachchan's Jhund (film), Shoojit Sircar's Sardar Udham Singh & Nagraj Majule & Ritesh Deshmukh's most awaited film on Chhatrapati Shivaji Maharaj' Mahagatha Trilogy . In 2008, Ajay-Atul won the Best Music Direction award at the 56th National Film Awards from the Government of India for contributing music to the Marathi film Jogwa.[2]"

    },
    {
    
        img: "./APJ.jpg",
        authorName: "A. P. J. Abdul Kalam",
        jobprof: "Aerospace Scientist",
        infor:"Avul Pakir Jainulabdeen Abdul Kalam (/ˈæbdəl kəˈlɑːm/ (About this soundlisten); 15 October 1931 – 27 July 2015) was an Indian aerospace scientist and politician who served as the 11th President of India from 2002 to 2007. He was born and raised in Rameswaram, Tamil Nadu and studied physics and aerospace engineering. He spent the next four decades as a scientist and science administrator, mainly at the Defence Research and Development Organisation (DRDO) and Indian Space Research Organisation (ISRO) and was intimately involved in India's civilian space programme and military missile development efforts.[1]"

    },
    {
    
        img: "./sachin.jpg",
        authorName: "Sachin Tendulkar",
        jobprof: "Cricketer",
        infor:"Sachin Ramesh Tendulkar (/ˌsʌtʃɪn tɛnˈduːlkər/ (About this soundlisten); born 24 April 1973) is a former Indian international cricketer who was also the captain of the Indian national team. He is widely regarded as one of the greatest batsmen in the history of cricket.[5] He is the highest run scorer of all time in International cricket. Considered as the world's most prolific batsman of all time,[6] he is the only player to have scored one hundred international centuries,"

    }







];
let image = document.getElementById("image");
let author = document.getElementById("author");
let prof = document.getElementById("job_profile");
let info = document.getElementById("info");


let pre = document.querySelector(".pre");
let post = document.querySelector(".post");
let random = document.querySelector(".random");
let currentItem = 0;



window.addEventListener("DOMContentLoaded", function ()
{
    showperson(currentItem);
}
)

function showperson(person)
{
    let cursor = arrayobj[person];
    image.src = cursor.img;
    author.textContent = cursor.authorName;
    prof.textContent = cursor.jobprof;
    info.textContent = cursor.infor;

}
post.addEventListener("click", function ()
{
    
        currentItem++;
    if (currentItem == arrayobj.length)
    {
        currentItem = 0;
            }
    
    
   

      showperson(currentItem);

   
})
pre.addEventListener("click", function ()
{
    
    currentItem--;
    if (currentItem < 0)
    {
        currentItem = arrayobj.length - 1;
            }
    
    
        showperson(currentItem)


})