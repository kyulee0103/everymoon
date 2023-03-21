import AsyncStorage from '@react-native-async-storage/async-storage'
import {format, getMonth, getDate} from 'date-fns'
import {useEffect, useState} from 'react'
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

const Block = styled.View`
    width: 100%;
    height: 46px;
`

const Middle = styled.Text`
    color: #294747;
    font-weight: 700;
    font-size: 30px;
    margin-top: 18px;
`

function Calendar({navigation}) {
    let date = new Date()
    const month = getMonth(date)
    const day = getDate(date)
    const [myData, setMyData] = useState()

    useEffect(() => {
        const getPeriodData = async () => {
            try {
                const storageData = JSON.parse(await AsyncStorage.getItem('periodData'))
                if (storageData) {
                    console.log('hey get the data!')
                    console.log(storageData)
                    setMyData(storageData)
                }
            } catch (e) {
                console.log(e)
            }
        }
        getPeriodData()
    }, [])

    return (
        <Total>
            <Contents>
                <Top>
                    {month}월 {day}일, 오늘
                </Top>
                <Top>월경 3일 전</Top>
                <Top></Top>
                <Middle>곧 월경이 시작될 거에요.</Middle>
                <Block />
                <Btn>
                    <BtnText>월경일 등록</BtnText>
                </Btn>
                <Btn>
                    <BtnText>월경일 편집</BtnText>
                </Btn>
                <Btn>
                    <BtnText>증상, 기분 기록 추가</BtnText>
                </Btn>
                <Btn>
                    <BtnText>성생활 기록 추가</BtnText>
                </Btn>
            </Contents>
        </Total>
    )
}

export default Calendar
