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
const Block = styled.View`
    width: 100%;
    height: 46px;
`

function Finset({navigation}) {
    return (
        <Total>
            <Contents>
                <Big>세팅 완료!</Big>
                <Block />
                <Btn
                    onPress={() => {
                        navigation.push('Main')
                    }}    
                >
                    <BtnText>서비스 이용하러 가기</BtnText>
                </Btn>
            </Contents>
        </Total>
    )
}

export default Finset