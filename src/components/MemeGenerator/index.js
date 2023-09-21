import {Component} from 'react'
import {
  Heading,
  MemeContainer,
  Label,
  Input,
  InputContainer,
  GlobalStyle,
  SelectElement,
  GenerateButton,
  FormContainer,
  RightContainer,
  TextPara,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    toShowMeme: false,
  }

  onChangeImageUrl = event => {
    this.setState({
      imageUrl: event.target.value,
    })
  }

  onChangeTopText = event => {
    this.setState({
      topText: event.target.value,
    })
  }

  onChangeBottomText = event => {
    this.setState({
      bottomText: event.target.value,
    })
  }

  onChangeSelect = event => {
    this.setState({
      fontSize: parseInt(event.target.value),
    })
  }

  onClickGenerate = () => {
    const {fontSize} = this.state
    this.setState({
      toShowMeme: true,
      fontSize,
    })
  }

  render() {
    const {toShowMeme, topText, bottomText, imageUrl, fontSize} = this.state
    console.log('toptext', topText)
    console.log('bottom text', bottomText)
    console.log('imageurl', imageUrl)
    console.log('font size', fontSize)
    return (
      <MemeContainer>
        <FormContainer>
          <Heading>Meme Generator</Heading>
          <InputContainer>
            <GlobalStyle />
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              id="imageUrl"
              type="text"
              placeholder="Enter the Image URL"
              onChange={this.onChangeImageUrl}
            />
          </InputContainer>
          <InputContainer>
            <GlobalStyle />
            <Label htmlFor="topText">Top Text</Label>
            <Input
              id="topText"
              type="text"
              placeholder="Enter the Top Text"
              onChange={this.onChangeTopText}
            />
          </InputContainer>
          <InputContainer>
            <GlobalStyle />
            <Label htmlFor="bottomText">Bottom Text</Label>
            <Input
              id="bottomText"
              type="text"
              placeholder="Enter the Bottom Text"
              onChange={this.onChangeBottomText}
            />
          </InputContainer>
          <Label htmlFor="select">Font Size</Label>
          <SelectElement id="select" onChange={this.onChangeSelect}>
            <GlobalStyle />

            {fontSizesOptionsList.map(each => (
              <option key={each.optionId} value={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </SelectElement>

          <GenerateButton type="button" onClick={this.onClickGenerate}>
            Generate
          </GenerateButton>
        </FormContainer>
        {toShowMeme ? (
          <RightContainer imageUrl={imageUrl} data-testid="meme">
            <TextPara size={fontSize}>{topText}</TextPara>
            <TextPara size={fontSize}>{bottomText}</TextPara>
          </RightContainer>
        ) : null}
      </MemeContainer>
    )
  }
}
export default MemeGenerator
