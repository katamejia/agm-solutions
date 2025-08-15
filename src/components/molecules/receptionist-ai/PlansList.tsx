import { useTranslation } from "next-i18next";

const PlansList = () => {
  const { t } = useTranslation("receptionist-ai");
  const plans: any = t("plans", {
    returnObjects: true,
  });

  return (
    <section className="IA">
     
      <div className="IA-plan">
        {plans.map((plan:any, idx:number) => (
          <div className="IA-plan-details" key={idx}>
            <h2>{plan.name}</h2>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feat:any, i:any) => (
                <li key={i}>
                  <i className="fas fa-check-circle"></i> {feat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlansList;
