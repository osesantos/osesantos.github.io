import packageJson from '../../../package.json';
import * as bin from './index';
import config from '../../../config.json';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const blog = async (args: string[]): Promise<string> => {
  //window.open(`${config.social.blog}`, '_self');

  //return 'Opening GUI version...';
  return `Comeback later, I'm still working on it :D`;
};

export const email = async (args: string[]): Promise<string> => {
  //window.open(`${config.social.email}`);

  return `email: ${config.social.email}`;
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/osesantos/terminal', '_blank');
  }, 1000);

  return 'Opening repository...';
};

export const donate = async (args?: string[]): Promise<string> => {
  window.open(config.funding.url, '_blank');

  return 'Opening donation url...';
};

export const banner = (args?: string[]): string => {
  return `
 #######   ######  ########  ######     ###    ##    ## ########  #######   ######  
##     ## ##    ## ##       ##    ##   ## ##   ###   ##    ##    ##     ## ##    ## 
##     ## ##       ##       ##        ##   ##  ####  ##    ##    ##     ## ##       
##     ##  ######  ######    ######  ##     ## ## ## ##    ##    ##     ##  ######  
##     ##       ## ##             ## ######### ##  ####    ##    ##     ##       ## 
##     ## ##    ## ##       ##    ## ##     ## ##   ###    ##    ##     ## ##    ## 
 #######   ######  ########  ######  ##     ## ##    ##    ##     #######   ###### 

Hi 👋😄

"Find something you love to do and you’ll never have to work a day in your life." - Arthur Szathmary
 
I'm a SW Engineer by day and a bug bounty hunter by night. 
Motivated to identify vulnerabilities, develop robust solutions, and collaborate with cross-functional teams.

🔭 I’m currently working as a full-stack engineer with C#, Typescript, Javascript, and React.
🌱 I’m on a journey to learn Rust.
👯 I’m looking to collaborate on projects/tools in go, rust, and Linux related projects.
📫 Feel free to reach out.
😄 I’m happy to learn and discuss any tech and cybersecurity-related topic.
⚡ Fun fact: When I'm not coding or hunting for bugs, you'll find me hiking and kitesurfing – I love embracing the great outdoors! ⛰🏄‍.

Type 'help' to see list of available commands.
`;
};
