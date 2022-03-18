import Heading from "../../components/Heading";
import  Head  from "next/head";
import ContactInfo from "../../components/ContactInfo";

const Contact = () => (
  <>
    <Head>
      <title>Contact</title>
    </Head>
  <ContactInfo contact={contact}/>
</>
)

export default Contact;