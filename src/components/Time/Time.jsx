import humanize from '../../scripts/utils/humanize'

function Time({date}) {
  return (
    <time className="help-text paragraph-xs font-regular" dateTime={date}>{humanize(date)}</time>
  )
}

export { Time }