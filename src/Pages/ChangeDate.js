import styled from 'styled-components/native'
import {useEffect, useState} from 'react'
import DatePickerModal from 'react-native-modal-datetime-picker'
import {addDays, differenceInDays, format, getDate, getMonth, getYear} from 'date-fns'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
const PressCustom = styled.TouchableOpacity`
    width: 100%;
    height: 61px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #294747;
    border-radius: 15px;
    margin-top: 18px;
`

const DateText = styled.Text`
    color: #294747;
    font-weight: 400;
    font-size: 24px;
`

function ChangeDate({navigation, route}) {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(startDate)
    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [currentData, setCurrentData] = useState()
    console.log(route.params.dates.pass)
    const onPressDate = () => {
        setVisible(true)
    }

    const onPressDate2 = () => {
        setVisible2(true)
    }

    const onCancel = () => {
        setVisible(false)
    }

    const onCancel2 = () => {
        setVisible2(false)
    }
    return (
        <Total>
            <Contents>
                <Top>새로운 날짜를</Top>
                <Top>입력해주세요.</Top>

                <Block />
                <Middle>월경 시작</Middle>
                <PressCustom onPress={onPressDate}>
                    <DateText>{format(startDate, 'yyyy / MM / dd')} </DateText>
                </PressCustom>
                <DatePickerModal
                    isVisible={visible}
                    onConfirm={(d) => {
                        setVisible(false)
                        setStartDate(d)
                        setEndDate(addDays(d, 5))
                    }}
                    onCancel={onCancel}
                    date={startDate}
                    textColor="black"
                    locale="ko"
                />
                <Middle>월경 끝</Middle>
                <PressCustom onPress={onPressDate2}>
                    <DateText>{format(endDate, 'yyyy / MM / dd')} </DateText>
                </PressCustom>
                <DatePickerModal
                    isVisible={visible2}
                    onConfirm={(d2) => {
                        setVisible2(false)
                        setEndDate(d2)
                    }}
                    onCancel={onCancel2}
                    date={endDate}
                    textColor="black"
                    locale="ko"
                />
                <Btn>
                    <BtnText>입력했어요</BtnText>
                </Btn>
            </Contents>
        </Total>
    )
}

export default ChangeDate
