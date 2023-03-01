import styled from "styled-components"
import tw from "twin.macro"

const StyledForm = styled.main.attrs({
    className: "mt-8 flex-col h-screen justify-center items-center bg-gray- ",
})`
  & {
    form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
    }
    input {
      ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4 `}
    }
    button {
      ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
    }
  }
`

const s = () => clsx('')

className={classNames('transform ', cond && 'rotate-90')}
className={'transform' + (cond ? ' rotate-90 ' : '')}
className={['transform ', cond && 'rotate-90'].filter(Boolean).join(' ')}
className={`transform ${cond && 'rotate-90'}${cond2 && ' rotate-180 '}`}
export default StyledForm;