pipeline {
    agent any

    stages {
        stage('DEV') {
          when {
            branch 'develop'
          }
            steps {
              sh 'npm install --force'
              sh 'npm run build'
              sh 'rm -r /var/www/html/dev/rb/*'
              sh 'cp -r /var/lib/jenkins/workspace/rb_develop/dist/* /var/www/html/dev/rb/'
              ansiblePlaybook credentialsId: 'ssh', disableHostKeyChecking: true, installation: 'Ansible', inventory: '/etc/ansible/hosts', playbook: '/var/lib/jenkins/develop-rb.yml'
            }
        }
    }
}
