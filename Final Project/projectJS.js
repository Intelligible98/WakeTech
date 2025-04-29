document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("mealPlan");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Name, email, goal
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const goal = document.getElementById("goal").value.trim();

        // Meals
        const breakfast = document.getElementById("breakfast").value.trim();
        const snack1 = document.getElementById("snack1").value.trim();
        const lunch = document.getElementById("lunch").value.trim();
        const snack2 = document.getElementById("snack2").value.trim();
        const dinner = document.getElementById("dinner").value.trim();

        // Generate plan
        const mealWindow = window.open("", "_blank", "width=800,height=600,left=200,top=200");

        mealWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>Your Meal Plan</title>
                    <link rel="stylesheet" href="style.css">
                </head>
                <body class="meal-plan-page">
                    <h1>Meal Plan For ${name}</h1>
                    <p class="email"><strong>Email:</strong> ${email}</p>
                    <p class="goal"><strong>Goal for the Week:</strong> ${goal}</p>
    
                    <h2>Daily Meal Schedule</h2>
                    <ul>
                        ${breakfast ? `<li><strong>Breakfast:</strong> ${breakfast}</li>` : ""}
                        ${snack1 ? `<li><strong>Morning Snack:</strong> ${snack1}</li>` : ""}
                        ${lunch ? `<li><strong>Lunch:</strong> ${lunch}</li>` : ""}
                        ${snack2 ? `<li><strong>Afternoon Snack:</strong> ${snack2}</li>` : ""}
                        ${dinner ? `<li><strong>Dinner:</strong> ${dinner}</li>` : ""}
                    </ul>

                    <button onclick="window.print()">Print or Download Meal Plan</button>
                </body>    
            </html>
            `);
            mealWindow.document.close();

    })

})
