function calculateCalories() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var activity = document.getElementById('activity').value;
    var calories;

    if(gender == 'male') {
        calories = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        calories = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    switch(activity) {
        case 'sedentary':
            calories *= 1.2;
            break;
        case 'light':
            calories *= 1.375;
            break;
        case 'moderate':
            calories *= 1.55;
            break;
        case 'active':
            calories *= 1.725;
            break;
    }

    document.getElementById('calories').innerText = Math.round(calories);

    generateMealSuggestions(calories);
    generateNutritionInfo(calories);
}

function generateMealSuggestions(calories) {
    var mealSuggestions = document.getElementById('mealSuggestions');
    var suggestions = '';

    if(calories <= 1500) {
        suggestions = `
            <h3>For 1500 calories per day:</h3>
            <h4>Breakfast:</h4>
            <ul>
                <li>Scrambled eggs with spinach and whole-grain toast</li>
                <li>Fresh fruit smoothie with yogurt and a handful of nuts</li>
            </ul>
            <h4>Lunch:</h4>
            <ul>
                <li>Quinoa salad with chickpeas, cherry tomatoes, cucumbers, and feta cheese</li>
                <li>Grilled veggie wrap with hummus</li>
            </ul>
            <h4>Dinner:</h4>
            <ul>
                <li>Stir-fried tofu with mixed vegetables and brown rice</li>
                <li>Baked chicken breast with sweet potato and steamed broccoli</li>
            </ul>
            <h4>Snacks:</h4>
            <ul>
                <li>Apple slices with almond butter</li>
                <li>Cottage cheese with pineapple chunks</li>
            </ul>
        `;
    } else if(calories <= 2000) {
        suggestions = `
            <h3>For 2000 calories per day:</h3>
            <h4>Breakfast:</h4>
            <ul>
                <li>Greek yogurt with granola, berries, and honey</li>
                <li>Whole-grain waffles with peanut butter and banana</li>
            </ul>
            <h4>Lunch:</h4>
            <ul>
                <li>Turkey and avocado wrap with mixed greens</li>
                <li>Lentil soup with a side of whole-grain bread</li>
            </ul>
            <h4>Dinner:</h4>
            <ul>
                <li>Grilled salmon with quinoa and roasted asparagus</li>
                <li>Spaghetti with marinara sauce, meatballs, and a side salad</li>
            </ul>
            <h4>Snacks:</h4>
            <ul>
                <li>Carrot sticks with hummus</li>
                <li>Mixed nuts and dried fruit</li>
            </ul>
        `;
    } else {
        suggestions = `
            <h3>For 2500 calories per day:</h3>
            <h4>Breakfast:</h4>
            <ul>
                <li>Omelette with mushrooms, bell peppers, and cheese</li>
                <li>Whole-grain pancakes with berries and a side of yogurt</li>
            </ul>
            <h4>Lunch:</h4>
            <ul>
                <li>Chicken Caesar salad with whole-grain croutons</li>
                <li>Bean and vegetable burrito with salsa</li>
            </ul>
            <h4>Dinner:</h4>
            <ul>
                <li>Beef stir-fry with brown rice and mixed vegetables</li>
                <li>Baked cod with mashed potatoes and green beans</li>
            </ul>
            <h4>Snacks:</h4>
            <ul>
                <li>Trail mix with nuts, seeds, and dark chocolate pieces</li>
                <li>Smoothie with spinach, pineapple, and almond milk</li>
            </ul>
        `;
    }

    mealSuggestions.innerHTML = suggestions;
}

function generateNutritionInfo(calories) {
    var nutritionInfo = document.getElementById('nutritionInfo');
    var tips = '';

    if(calories <= 1500) {
        tips = `
            <h3>Nutritional Tips:</h3>
            <ul>
                <li>Focus on nutrient-dense foods to maximize your nutrient intake.</li>
                <li>Include healthy fats from sources like avocados, nuts, and olive oil.</li>
                <li>Drink green tea for its antioxidant properties.</li>
            </ul>
        `;
    } else if(calories <= 2000) {
        tips = `
            <h3>Nutritional Tips:</h3>
            <ul>
                <li>Include a variety of protein sources like fish, poultry, beans, and legumes.</li>
                <li>Stay hydrated by drinking water throughout the day.</li>
                <li>Incorporate fiber-rich foods to support digestive health.</li>
            </ul>
        `;
    } else {
        tips = `
            <h3>Nutritional Tips:</h3>
            <ul>
                <li>Balance your meals with a good mix of carbohydrates, protein, and fats.</li>
                <li>Incorporate a variety of colorful vegetables to ensure a range of nutrients.</li>
                <li>Avoid sugary drinks and opt for water, herbal teas, or natural fruit juices.</li>
            </ul>
        `;
    }

    nutritionInfo.innerHTML = tips;
}