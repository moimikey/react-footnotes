import * as React from 'react'
import { shallow } from 'enzyme'
import Footnotes from './Footnotes'

describe('react-footnotes', () => {
  it('renders footnotes', () => {
    const wrapper = shallow(
      <Footnotes>
        {({ Footnote, getFootnotes }) => (
          <React.Fragment >
            <Footnote i={1} source={`https://google.com`} desc={`this is a description.`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Footnote>
            <Footnote i={2} source={`https://google.com`} desc={`this is a description.`}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Footnote>
            <Footnote i={3} source={`https://google.com`} desc={`this is a description.`}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Footnote>
            <Footnote i={4} source={`https://google.com`} desc={`this is a description.`}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Footnote>
            {JSON.stringify(getFootnotes())}
          </React.Fragment>
        )}
      </Footnotes>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
