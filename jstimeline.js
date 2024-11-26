// Data for timeline updates
const timelineData = {
    intro: {
        title: "Introduction",
        text: "Cameroon is a nation situated at the crossroads of western and central Africa. Known for its ethnically diverse population, it has one of the most urbanized demographics in western Africa. The capital city, Yaoundé, is in the south-central region. The country's name originates from Rio dos Camarões (“River of Prawns”), a term Portuguese explorer of the 15th and 16th centuries used to describe the Wouri River estuary. This name, Camarões, was also applied to the nearby mountains. Up until the late 19th century, English speakers referred to the mountains as “the Cameroons,” while the estuary was known as the Cameroons River or locally as the Bay. In 1884, the Germans adopted the term Kamerun to encompass their entire protectorate, which roughly aligns with the boundaries of present-day Cameroon.",
        image: "images/cameroun1.png",
        buttonColor: "#4CAF50"
    },
    history: {
        title: "Cameroon's History (1920-1960)",
        text: "The Cameroon Grasslands are traditionally divided into three subgroups, one of which is the Bamum. This group includes several smaller ethnic communities that are loosely connected, sharing historical and political similarities while maintaining distinct identities. The Bamum are notable for being among the first African peoples to develop a writing system, an achievement led by King Njoya in the late 19th century. Under German colonial rule, Njoya retained his position as ruler through indirect governance, but he was exiled following the French takeover in 1916. Since then, the Bamum kingship has been reinstated.",
        image: "images/bamum1 1920-1960.jpg",
        buttonColor: "#FF0000"
    },
    situation: {
        title: "Cameroon's Situation (1980)",
        text: "On November 4, 1982, Ahidjo resigned as president, succeeded by Prime Minister Paul Biya, though he remained leader of the ruling UNC party. Ahidjo attempted to maintain influence over the government, leading to tensions with Biya. After an unsuccessful bid to assert party control, Ahidjo resigned as UNC leader in August 1983. A failed coup attempt on April 6, 1984, allegedly linked to Ahidjo or his supporters, followed. Biya remained in power, while Ahidjo, in exile in France, was tried and sentenced in absentia. The UNC was later rebranded as Biya’s Cameroon People’s Democratic Movement (CPDM).",
        image: "images/1980.jpg",
        buttonColor: "#0000FF"
    },
    today: {
        title: "Cameroon's Today (2020)",
        text: "Cameroon participated in the 2000 Summer Olympics held in Sydney, Australia, marking a significant moment in the country's sports history. The highlight of their performance was the men's football team, which secured Cameroon’s first-ever Olympic gold medal. The team achieved a dramatic victory in the final against Spain, winning in a penalty shootout after a 2–2 draw in regular and extra time. This triumph elevated Cameroon's status in international football and inspired a new generation of athletes in the country. The success also symbolized national pride and unity during a period of broader socio-economic challenges in Cameroon.",
        image: "images/2000 olympic6748-main.jpg",
        buttonColor: "#FFD700"
    }
   
};
console.log(timelineData);

// Function to update the timeline section
function updateTimeline(buttonId) {
    
    const data = timelineData[buttonId];
    
    document.getElementById("timeline_title").textContent = data.title;

    document.getElementById("text").textContent = data.text;

    document.getElementById("story_image").src = data.image;

    // Update the clicked button background color
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        if (button.id === buttonId) {
            button.style.backgroundColor = data.buttonColor;
        } else {
            button.style.backgroundColor = ""; 
        }
    });
}

// Add event listeners to buttons
document.getElementById("intro").addEventListener("click", () => updateTimeline("intro"));
document.getElementById("history").addEventListener("click", () => updateTimeline("history"));
document.getElementById("situation").addEventListener("click", () => updateTimeline("situation"));
document.getElementById("today").addEventListener("click", () => updateTimeline("today"));
