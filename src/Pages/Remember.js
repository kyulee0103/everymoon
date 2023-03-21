import {Text, View} from 'react-native'
import styled from 'styled-components/native'

const Total = styled.SafeAreaView`
    background-color: #f1d5d4;
    flex: 1;
`
const Btn = styled.TouchableOpacity`
    width: 100%;
    height: 61px;
    background: #294747;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 18px;
`


const BtnText = styled.Text`
    color: #ffffff;
    font-weight: 400;
    font-size: 24px;
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
const Block = styled.View`
    width: 100%;
    height: 46px;
`

function Remember({navigation}) {
    return (
        <Total>
            <Contents>
                <Top>이전 월경날짜를</Top>
                <Top>기억하나요?</Top>
                <Block></Block>
                <Btn
                    onPress={() => {
                        navigation.push('Pastdate')
                    }}    
                >
                    <BtnText>기억나요</BtnText>
                </Btn>
                <Btn
                    onPress={() => {
                        navigation.push('Symptom')
                    }}    
                >
                    <BtnText>기억이 안 나요</BtnText>
                </Btn>
            </Contents>
        </Total>
    )
}

export default Remember