import { Container } from "./styles";

export function Input({ icon: Icon, ...rest }) {
  return(
    <Container>
      <input {...rest}/>

      <div>
        {Icon && <Icon size={20} />}
      </div>
    </Container>
  )
}