/** @jsx jsx */
import { Box, Flex, Link, jsx } from "theme-ui"

const Footer = () => {
  return (
    <Box as="footer" variant="footer">
      &copy; {new Date().getFullYear()}. Iqan Shaikh.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Link
          aria-label="Link to the author's website"
          href="https://iqans.com"
        >
          Iqan
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer