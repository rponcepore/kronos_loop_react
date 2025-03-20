//! PlanDemoComponent.tsx
import { useEffect, useState } from "react";
import ApiButton from "./ApiButton";
import { Plan, serializeToPlan } from "./PlanData";
import PlanDemoCard from "./PlanDemoCard";

export default function PlanDemoComponent() {
    // This imports the data for boring, non-networked display use
    //const plans = plans_list.map(plan => PlanDemoCard(plan))

    // This imports the data from a network call
    const [plans, setPlans] = useState<Plan[]>([]);
     // This imports the data from a network call
     useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await fetch('http://localhost:8000/api', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        http_method:"POST", 
                        action:"get_plans", 
                        unit:"tstUIC", // Replace with the actual data you need to send
                    }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json(); 
                console.log(data); 

                // Convert this all into Typed PLANS
                const typed_plan_array: Plan[] = [];
                for (const plan of data.plans_vec) {
                    typed_plan_array.push(serializeToPlan(plan));
                  }

                //const plan_map = typed_plan_array.map(plan => PlanDemoCard(plan))

                setPlans(typed_plan_array); // Update the state with the fetched plans
            } catch (error) {
                console.error('There was an error fetching the plans:', error);
            }
        };

        fetchPlans(); // Call the function to fetch plans when the component mounts
    }, []); // Empty dependency array means it runs once when the component mounts

    return (
        <>
            <h2>Plans:</h2>
            {plans.length > 0 ? plans.map(plan => 
                <PlanDemoCard key={plan.id} {...plan} />) : <p>"Fetch is either in flight or has failed."</p>}

        </>
    );
}

