import {Text, View} from 'react-native'
import styled from 'styled-components/native'
import GoBack from '../Components/GoBack'

const Total = styled.SafeAreaView`
    background-color: #f1d5d4;
    flex: 1;
`

const Contents = styled.View`
    margin-top: 50px;
`
const Top = styled.Text`
    color: #294747;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    margin-left: 15px;
    margin-bottom: 36px;
`
const Back = styled.Text`
    color: #294747;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    margin-left: 15px;
    margin-bottom: 36px;
`

const Box = styled.TouchableOpacity`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 26px 18px;
    gap: 10px;
    width: 100%;
    height: 76px;
    background: #f1d5d4;
    flex: none;
    order: 0;
    flex-grow: 0;
`
const Dark = styled.TouchableOpacity`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 26px 18px;
    gap: 10px;
    width: 100%;
    height: 76px;
    background: #e8c3c2;
    border: 1px solid #294747;
    flex: none;
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
    flex-grow: 0;
`

function Information({navigation}) {
    return (
        <Total>
            <GoBack navigation={navigation} />
            <Contents>
                <Top>월경용품 사용법을{'\n'}알려드릴게요.</Top>
                <Dark>
                    <BoxText>Q. 월경용품이 무엇이죠?</BoxText>
                </Dark>
                <Box>
                    <BoxText>Q. 월경용품이 무엇이죠?</BoxText>
                </Box>
                <Dark>
                    <BoxText>Q. 월경용품이 무엇이죠?</BoxText>
                </Dark>
                <Box>
                    <BoxText>Q. 월경용품이 무엇이죠?</BoxText>
                </Box>
                <Dark>
                    <BoxText>Q. 월경용품이 무엇이죠?</BoxText>
                </Dark>
                <Box>
                    <BoxText>Q. 월경용품이 무엇이죠?</BoxText>
                </Box>
                <Dark>
                    <BoxText>Q. 월경용품이 무엇이죠?</BoxText>
                </Dark>
            </Contents>
        </Total>
    )
}

export default Information
