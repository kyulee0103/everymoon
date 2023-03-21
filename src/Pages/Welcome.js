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
    margin-top: 46px;
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

const Big = styled.Text`
    color: #294747;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 24px;
`
const Middle = styled.Text`
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #294747;
`
function Welcome({navigation}) {
    return (
        <Total>
            <Contents>
                <Big>환영합니다!</Big>
                <Middle>에브리문을 시작해볼까요?</Middle>
                <Middle>간단하게 세팅할 수 있어요.</Middle>
                <Btn
                    onPress={() => {
                        navigation.push('Birth')
                    }}    
                >
                    <BtnText>시작하기</BtnText>
                </Btn>
                <Button
                    onPress={() => {
                        navigation.push('Main')
                    }}
                    title="홈으로 가기"
                />
            </Contents>
        </Total>
    )
}

export default Welcome
