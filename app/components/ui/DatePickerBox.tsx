'use client'
import { Box } from '@/styled-system/jsx'
import { DatePicker, Portal } from '@ark-ui/react'
import { textInput } from '../model/Form'
import { css } from '@/styled-system/css'

export const DatePickerBox = () => {
  return (
    <Box>
      <DatePicker.Root id='date' name='date' locale='ja'>
        <DatePicker.Control>
          <DatePicker.Input className={textInput} />
          <DatePicker.Trigger className={trigger}>📅</DatePicker.Trigger>
        </DatePicker.Control>
        <Portal>
          <DatePicker.Positioner className={positioner}>
            <DatePicker.Content className={content}>
              <DatePicker.View view='day'>
                {(api) => (
                  <>
                    <DatePicker.ViewControl className={viewControl}>
                      <DatePicker.PrevTrigger>＜</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger>
                        <DatePicker.RangeText />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger>＞</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table className={table}>
                      <DatePicker.TableHead>
                        <DatePicker.TableRow>
                          {api.weekDays.map((weekDay, id) => (
                            <DatePicker.TableHeader key={id}>
                              {weekDay.short}
                            </DatePicker.TableHeader>
                          ))}
                        </DatePicker.TableRow>
                      </DatePicker.TableHead>
                      <DatePicker.TableBody>
                        {api.weeks.map((week, id) => (
                          <DatePicker.TableRow key={id}>
                            {week.map((day, id) => (
                              <DatePicker.TableCell key={id} value={day}>
                                <DatePicker.TableCellTrigger>
                                  {day.day}
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.View>
              <DatePicker.View view='month'>
                {(api) => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger>
                        <DatePicker.RangeText />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableBody>
                        {api
                          .getMonthsGrid({ columns: 4, format: 'short' })
                          .map((months, id) => (
                            <DatePicker.TableRow key={id}>
                              {months.map((month, id) => (
                                <DatePicker.TableCell
                                  key={id}
                                  value={month.value}
                                >
                                  <DatePicker.TableCellTrigger>
                                    {month.label}
                                  </DatePicker.TableCellTrigger>
                                </DatePicker.TableCell>
                              ))}
                            </DatePicker.TableRow>
                          ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.View>
              <DatePicker.View view='year'>
                {(api) => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger>
                        <DatePicker.RangeText />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableBody>
                        {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                          <DatePicker.TableRow key={id}>
                            {years.map((year, id) => (
                              <DatePicker.TableCell key={id} value={year.value}>
                                <DatePicker.TableCellTrigger>
                                  {year.label}
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.View>
            </DatePicker.Content>
          </DatePicker.Positioner>
        </Portal>
      </DatePicker.Root>
    </Box>
  )
}

const trigger = css({
  ml: '8px',
  cursor: 'pointer',
})

const positioner = css({
  zIndex: 1000,
})

const content = css({
  p: '16px',
  background: '#333',
  color: '#fff',
})

const viewControl = css({
  display: 'flex',
  justifyContent: 'space-between',
})

const table = css({
  '& th': { padding: '4px', textAlign: 'center' },
  '& td': { padding: '4px', textAlign: 'center' },
  '& td button': { cursor: 'pointer' },
  '& td:hover': { bg: '#666', borderRadius: '4px' },
  '& td[aria-current="date"]': { borderBottom: 'solid 2px #3ecf8e' },
})
