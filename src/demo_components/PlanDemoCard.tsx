import { Plan } from './PlanData.tsx'

export default function PlanDemoCard(plan: Plan) {
    return(
        <>
            <p key={plan.id}> Plan {plan.fiscal_year}-{plan.serial_number} <strong>{plan.name}</strong> </p>
            <>
                <button onClick={() => alert("You clicked \'Modify Plan\'")}>
                    "Modify Plan"
                </button>
                <button onClick={() => alert("You clicked \'Delete Plan\'")}>
                    "Delete Plan"
                </button>
            </>
        </>
    )
}