import Link from "next/link";
import { useTranslation } from "next-i18next";


const Social = () => {
  const { t } = useTranslation("common");

  const socialNetworks: any = t("social_networks.social_networks_list", {
    returnObjects: true,
  });

  return (
    <div className="social">
      <p>{t("social_networks.social_title")}</p>
      <ul className="social-networks">
        {socialNetworks.map((network: any) => (
          <li>
            <Link href={network.link} target={network.target} rel="noreferrer">
              <img src={network.img} alt={network.alt} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
