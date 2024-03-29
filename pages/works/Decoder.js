import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ZoomableImageWorks } from '../../components/ZoomableImage'

const Decoder = () => {
  return (
    <Layout title={"Decoder"}>
      <Container>
        <Title>
          Decoder <Badge>2021</Badge>
        </Title>
        <P>
          Decoder is a tool that helps people to decode and encode text, it is a simple tool that I made to practice my skills with React.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href={"https://bcondict.github.io/challenge-oracle-decoder/"} isExternal>
              https://bcondict.github.io/challenge-oracle-decoder/ <ExternalLinkIcon mx={"2px"}/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML/CSS and JavaScript</span>
          </ListItem>
        </List>

        <ZoomableImageWorks src={"/images/works/decoder/decoder-landpage.png"} alt={"Decoder"} />
        <ZoomableImageWorks src={"/images/works/decoder/decoder-message.png"} alt={"Decoder Message"} />
      </Container>
    </Layout>
  )
}

export default Decoder
