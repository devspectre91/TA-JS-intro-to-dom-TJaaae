

{/* <li>
          <div class="flex"><img class="flex-20"
              src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg"
              alt="">
            <h2 class="flex-75">Eddark Ned Stark</h2>
          </div>
          <p>lord of winterfell ksdjks sjdhjdfh jdfkjdhf kdjfkdjfj kdjfie jksjfkdmf kdjfkdjfkdf </p>
          <a class="btn" href="">Learn More!</a>

        </li> */}




let myList = document.querySelector("ul");
got.houses.forEach((house) => {
    house.people.forEach((person) => {
        let li = document.createElement("li");
        let outer = document.createElement("div");
        outer.classList.add("flex");
        let image = document.createElement("img");
        image.classList.add("flex-20");
        image.setAttribute("src", person.image);

        let h2 = document.createElement("h2");
        h2.classList.add("flex-75");
        h2.append(document.createTextNode(person.name));
        outer.append(image, h2);
        let p = document.createElement("p");
        p.append(person.description);
        let a = document.createElement("a");
        a.classList.add("btn");
        a.setAttribute("href", "");
        a.innerText = "Learn More!";
        li.append(outer, p, a);
        myList.append(li);
    })


});