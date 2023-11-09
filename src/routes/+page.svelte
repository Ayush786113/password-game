<div class="container">
    <div>
        <input type="text" bind:value={answer} on:input={backend}>
        <div class="grid">
        <span>{response}</span>
        <button hidden id="proceed" on:click=  {showconfirmation}>Proceed to Hall of Fame</button>
        </div>
    </div>
    <div>
        <h3>Hall of Fame</h3>
        <Famecardwrapper famelist={data.data.documents}/>
    </div>
    <dialog id="confirmation">
        <article>
          <header>
            <h3>Hall of Fame!</h3>
            <span>Get featured in the Hall of Fame for successfully completing the password game!</span>
          </header>
          <input type="text" placeholder="Name" bind:value={name}>
          <input type="email" placeholder="Email" bind:value={email}>
          <input type="text" placeholder="Instagram Profile Username" bind:value={ig}>
          <input type="text" placeholder="Password comes here!" readonly value={answer}>
          <label for="avatar">Your picture</label>
          <input type="file" name="avatar" id="profile" accept="image/*">
          <textarea maxlength="1024" placeholder="Your experience" bind:value={experience} />
          <span>{mistake}</span>
          <footer>
            <button on:click={writetodatabase}>Confirm</button>
          </footer>
        </article>
      </dialog>
</div>
<script>
    import { lengthofstring, hascaps, presenceofspecialcharacter, sumtosixtynine, drangonofthewest, sundayinclusion, ibelieve, oddlength, isprimelength} from "../lib/control"

    import { validateemail } from '../lib/validator'
    import { uploadPicture, uploadSolution, getSOlutions } from '../lib/appwrite'

    import { onMount } from 'svelte'

    import Famecardwrapper from "../components/famecardwrapper.svelte"
    
    let answer = "", response = "Type anything to proceed!", confirmation = null, proceed = null, name = null, email = null, ig = null, experience = null, profile = null, mistake = "Email, Instagram URL and photo are optional but will help to uniquely identify you."
    export let data

    onMount(() => {
        confirmation = document.getElementById("confirmation")
        proceed = document.getElementById("proceed")
        profile = document.getElementById("profile")
    })

    function showconfirmation(){
        profile.value = ''
        confirmation.setAttribute("open", "open")
    }

    async function writetodatabase(){
        if(name == null || name.length == 0)
            mistake = "Please provide your name!"
        
        else if(email != null && email.length > 0 && !validateemail(email))
            mistake = "Invalid email!"
        
        else{
            const data = {
                "name": name,
                "email": email,
                "instagram": ig,
                "solution": answer,
                "avatar": await uploadPicture(profile.files[0]),
                "experience": experience
            }
            const response = await uploadSolution(data)
            if(response === true)
                confirmation.removeAttribute("open")
            answer = ""
        }
    }

    function backend(){
        proceed.setAttribute("hidden", "hidden")

        if(answer.length == 0)
            response = "Type anything to proceed!"

        else if (!lengthofstring(answer))
            response = "Its your password, make it large!"

        else if(!hascaps(answer))
            response = "Small letters are easier to manage. Isn't it?"

        else if(!presenceofspecialcharacter(answer))
            response = "Everything and Everyone is special and so your password should be. Give it (a) special character(s)."

        else if(!sumtosixtynine(answer))
            response = "Include Yin-Yang... But using single digit numerics ;)"

        else if(!drangonofthewest(answer))
            response = "Who is called the 'Dragon of the West'?"

        else if(!sundayinclusion(answer))
            response = "Which star has a day of the week named after it?"

        else if(!ibelieve(answer))
            response = "What do you believe in? Think and answer. Start with 'ibelieve'."

        else if(!oddlength(answer))
            response = "Make an odd length password to make it difficult for others to guess."

        else if(!isprimelength(answer))
            response = "Maybe a password of odd-prime length is stronger."

        else{
            response = "Congratulations! You created a password that satisfies all the conditions!"
            proceed.removeAttribute("hidden")
        }
    }
</script>

<style>
    div{
        margin-top: 10px
    }
</style>