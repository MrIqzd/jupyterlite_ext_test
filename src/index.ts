import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyter_oss extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyter_oss:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyter_oss is activated!');
  }
};

export default plugin;
