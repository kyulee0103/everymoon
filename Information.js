import {Text, View} from 'react-native'
import styled from 'styled-components/native'

const Total = styled.SafeAreaView`
    background-color: #f1d5d4;
    flex: 1;
`

const Contents = styled.View`
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 90px;
`
const Top = styled.Text`
    color: #294747;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
`

const Btn = styled.TouchableOpacity`
    width: 100%;
    height: 61px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 18px;
`

const BtnText = styled.Text`
    color: #294747;
    font-weight: 400;
    font-size: 24px;
`

const Block = styled.View`
    width: 100%;
    height: 50px;
`
const Box = styled.TouchableOpacity`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 26px 18px;
    gap: 10px;

    width: 390px;
    height: 76px;

    background: #E8C3C2;
    border: 1px solid #294747;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const BoxText = styled.Text`
    width: 195px;
    height: 24px;

    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;

    color: #294747;

    flex: none;
    order: 0;
    flex-grow: 0;
`

function Information({navigation}) {
    return (
        <Total>
            <Contents>
                <Btn
                    onPressOut={() => {
                        navigation.push('Main')
                    }}
                >
                    <BtnText>뒤로가기</BtnText>
                </Btn>
                <Block></Block>
                <Top>월경용품 사용법을</Top>
                <Top>알려드릴게요.</Top>
                <Box>
                    <BoxText>Q. 월경용품이 무엇이죠?</BoxText>
                </Box>
                <Box>
                    <BoxText>Q. 월경용품이 무엇이죠?</BoxText>
                </Box>
                <Box>
                    <BoxText>Q. 월경용품이 무엇이죠?</BoxText>
                </Box>
                <Box>
                    <BoxText>Q. 월경용품이 무엇이죠?</BoxText>
                </Box>
                <Box>
                    <BoxText>Q. 월경용품이 무엇이죠?</BoxText>
                </Box>
                <Box>
                    <BoxText>Q. 월경용품이 무엇이죠?</BoxText>
                </Box>
                <Box>
                    <BoxText>Q. 월경용품이 무엇이죠?</BoxText>
                </Box>
            </Contents>
        </Total>
    )
}

export default Information