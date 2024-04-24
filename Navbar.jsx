import {
  Flex,
  Box,
  Spacer,
  Heading,
  MenuButton,
  Menu,
  Portal,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/react";
import { TbBrandWalmart } from "react-icons/tb";
import { CiGrid41 } from "react-icons/ci";
import { BsUiRadiosGrid } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <>
      <div className="bg-blue-700 text-white h-[10vh] w-[100%] fixed top-0 px-10">
        <Flex align={"center"}>
          <Box>
            <button className="hover:bg-blue-950 hover:rounded-2xl p-2">
              <Flex>
                <Heading className="text-white text-2xl">Walmart</Heading>
                <Spacer />
                <TbBrandWalmart className="w-10 h-10 text-yellow-400" />
              </Flex>
            </button>
          </Box>
          <Spacer />

          <Box>
            <button className="hover:bg-blue-950 hover:rounded-2xl p-2">
              <Flex align={"center"}>
                <CiGrid41 className="w-4 h-4 text-white" />
                <Spacer />
                <Heading className="text-white text-sm pl-2">
                  Departments
                </Heading>
              </Flex>
            </button>
          </Box>
          <Spacer />

          <Box>
            <button className="hover:bg-blue-950 hover:rounded-2xl p-2">
              <Flex align={"Center"}>
                <BsUiRadiosGrid className="w-4 h-4 text-white" />
                <Spacer />
                <Heading className="text-white text-sm pl-2">Services</Heading>
              </Flex>
            </button>
          </Box>
          <Spacer />
          <Box w="30%">
            <Flex align={"center"} className="relative">
              <input
                type="text"
                placeholder="Search everything at Walmart online and in store"
                className="w-[100%] rounded-md text-black text-center"
              />
              <Spacer />
              <button className="bg-yellow-300 rounded-full absolute w-6 h-6 left-[95%]">
                <CiSearch className="w-4 h-4 text-black m-auto" />
              </button>
            </Flex>
          </Box>
          <Spacer />
          <Box bg="green.400">
            <button className="hover:bg-blue-950 hover:rounded-2xl p-2">
              <Flex align={"center"}>
                <CiHeart className="w-4 h-4 text-white" />
                <Spacer />
                <Button>My Items</Button>
              </Flex>
            </button>
          </Box>
          <Spacer />
          <Box>
            <button className="hover:bg-blue-950 hover:rounded-2xl p-2">
              <Flex align={"Center"}>
                <FaRegUser className="w-4 h-4 text-white" />
                <Spacer />
                <Menu>
                  <MenuButton> Sign In Account</MenuButton>
                  <Portal>
                    <MenuList mt={6}>
                      <Button colorScheme="blue" w={"94%"} borderRadius={8}>Sign in or create account</Button>
                      <MenuItem>New Window</MenuItem>
                      <MenuItem>Open Closed Tab</MenuItem>
                      <MenuItem>Open File</MenuItem>
                    </MenuList>
                  </Portal>
                </Menu>
              </Flex>
            </button>
          </Box>
          <Spacer />
          <Box>
            <button className="hover:bg-blue-950 hover:rounded-2xl p-2">
              <FaCartPlus />
            </button>
          </Box>
        </Flex>
      </div>
    </>
  );
}

export default Navbar;
