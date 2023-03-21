import {Button, Text, View} from 'react-native'
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
    margin-top: 30px;
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
    height: 30px;
`
const Btn2 = styled.TouchableOpacity`
    width: 100%;
    height: 61px;
    border: 3px solid #294747;
    border-radius: 15px;
    display: flex;
    flex-direction : row;
    justify-content: center;
    align-items: center;
    align-items: center;
    margin-top: 18px;
`
const Btn2Text = styled.Text`
    width: 152px;
    height: 29px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #294747;
`

function Symptom({navigation}) {
    return (
        <Total>
            <Contents>
                <Top>마지막으로,</Top>
                <Top>월경 시 증상을</Top>
                <Top>입력해주세요.</Top>
                <Block />
                <Btn2>
                    <Btn2Text>경련통</Btn2Text>
                </Btn2>
                <Btn2>
                    <Btn2Text>특이한 분비물</Btn2Text>
                </Btn2>
                <Btn2>
                    <Btn2Text>많은 생리 양</Btn2Text>
                </Btn2>
                <Btn2>
                    <Btn2Text>너무 변덕스러움</Btn2Text>
                </Btn2>
                <Btn2>
                    <Btn2Text>이상 증상 없음</Btn2Text>
                </Btn2>
                <Btn
                    onPress={() => {
                        navigation.push('Setting')
                    }}    
                >
                    <BtnText>입력했어요</BtnText>
                </Btn>
            </Contents>
        </Total>
    )
}

export default Symptom